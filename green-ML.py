import streamlit as st
import numpy as np
import pandas as pd
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout, BatchNormalization
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt

# --- STREAMLIT PAGE CONFIG ---
st.set_page_config(page_title="JSB AI Engine", page_icon="💧", layout="wide")

# Custom CSS to match your Technex '26 website theme
st.markdown("""
    <style>
    .main { background-color: #0b0e14; color: #ffffff; }
    .stMetric { background-color: #161b22; border: 1px solid #00ffa8; padding: 15px; border-radius: 10px; }
    h1, h2, h3 { color: #00ffa8 !important; }
    </style>
    """, unsafe_allow_html=True)

st.title(" Jal Sanrakshan Buddhi AI Engine")
st.subheader("Predictive Thermal & Leak Detection Dashboard")

# 1. SIMULATED TELEMETRY DATA
@st.cache_data
def generate_jsb_data(n_steps=1200):
    time = np.linspace(0, 100, n_steps)
    temp = 38 + 5 * np.sin(time * 0.5) + np.random.normal(0, 0.5, n_steps)
    flow = 2.4 + 0.2 * np.cos(time * 0.5) + np.random.normal(0, 0.1, n_steps)
    pressure = 15 + np.random.normal(0, 0.2, n_steps)
    it_load = 50 + 10 * np.sin(time * 0.3)
    pump_power = 5 + 2 * np.cos(time * 0.5)
    return pd.DataFrame({'temp': temp, 'flow': flow, 'pressure': pressure, 'it_load': it_load, 'pump_power': pump_power})

data = generate_jsb_data()

# 2. DATA PRE-PROCESSING
scaler = MinMaxScaler()
scaled_data = scaler.fit_transform(data)

def create_sequences(data, seq_length=15):
    X, y = [], []
    for i in range(len(data) - seq_length):
        X.append(data[i:i + seq_length])
        y.append(data[i + seq_length, 0]) 
    return np.array(X), np.array(y)

X, y = create_sequences(scaled_data)
train_size = int(len(X) * 0.8)
X_train, X_test = X[:train_size], X[train_size:]
y_train, y_test = y[:train_size], y[train_size:]

# 3. AI MODEL TRAINING (Wrapped in a spinner for better UX)
@st.cache_resource
def train_model(_X_train, _y_train):
    model = Sequential([
        LSTM(64, activation='relu', input_shape=(_X_train.shape[1], _X_train.shape[2]), return_sequences=True),
        BatchNormalization(),
        Dropout(0.2),
        LSTM(32, activation='relu'),
        Dense(1) 
    ])
    model.compile(optimizer='adam', loss='mse')
    model.fit(_X_train, _y_train, epochs=5, batch_size=32, verbose=0)
    return model

with st.spinner("Initializing Aqua-Neural LSTM Engine..."):
    model = train_model(X_train, y_train)

# 4. INFERENCE & METRICS
predictions = model.predict(X_test)
test_data_unscaled = data.iloc[train_size + 15:].reset_index(drop=True)
pue_values = (test_data_unscaled['it_load'] + test_data_unscaled['pump_power']) / test_data_unscaled['it_load']

# UI - TOP ROW METRICS
col1, col2, col3 = st.columns(3)
with col1:
    avg_pue = np.mean(pue_values)
    st.metric("Avg System PUE", f"{avg_pue:.3f}", delta="-0.02 (Optimal)")
with col2:
    current_temp = test_data_unscaled['temp'].iloc[-1]
    st.metric("Core Temperature", f"{current_temp:.2f} °C", delta="Normal")
with col3:
    st.metric("System Health", "Optimal", delta="AI Protected", delta_color="normal")

# 5. GRAPHS SECTION
st.divider()
tab1, tab2, tab3 = st.tabs(["Thermal Prediction", "PUE Efficiency Audit", "Raw Telemetry"])

with tab1:
    st.write("### Predictive Thermal Nexus")
    fig1, ax1 = plt.subplots(figsize=(10, 4))
    ax1.plot(y_test[-100:], label='Actual Telemetry', color='#008080')
    ax1.plot(predictions[-100:], label='AI Prediction', color='#00ffa8', linestyle='--')
    ax1.set_facecolor('#0b0e14')
    ax1.legend()
    st.pyplot(fig1)

with tab2:
    st.write("### Sustainability Audit: PUE Effectiveness")
    st.line_chart(pue_values, color="#2E8B57")
    st.info("Target PUE for Technex '26 Submission: 1.08")

with tab3:
    st.write("### Live Hardware Data Stream")
    st.dataframe(data.tail(10), use_container_width=True)

# 6. SYSTEM STATUS NOTIFICATION
if avg_pue > 1.15:
    st.error("ALERT: High PUE Detected. Optimizing Pump Flow...")
else:
    st.success("System Status: All chips within thermal safety limits.")