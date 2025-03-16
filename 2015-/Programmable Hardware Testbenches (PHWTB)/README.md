# Programmable Hardware Testbenches (PHWTB) for SPO board
The main purpose of the project was to create **Testbenches** to **automate verification** process for **FPGA VHDL modules** developed for customer. The testbenches were implemented for each **individual block** of **FPGA design** as well as at **system level**. They were implemented for the following components: **Supervisory (Voltage Monitoring, Watchdog, Reset); Serial Communications (Ethernet, SPI), Analog Receiver (Gain Control, Sampling and Routing Control, DSP, Diagnostics), Analog Transmitter (FSK and Multi-frequency transmitters), Decelerometer, Tachometer, PWM, Current Loop**.

### My Role
-	**Functional tests devlopment** for Programmable Hardware.
-	**Firmware verification** and simulation.
-	Customer **schematics** review.
-	Technical **documentation** support.
-	**Communication** with Customer

### Tools & Technologies
Altera Quartus II 8.1, FPGA, VHDL, ModelSim v6.1e, MATLAB (Signal Processing, Compiler, Report Generator), TCL, DO-254.

<hr>

**SPO Board - Hardware (HW) to Programmable Hardware (PHW) Architecture:**
<img alt="SPO Board - HW-PHW Architecture" src="0SPO Board - HW-PHW Architecture.png">

**SPO Board - Programmable Hardware (PHW) Architecture:**
<img alt="SPO Board - PHW Architecture" src="1SPO Board - PHW Architecture.png">

**Moving Reference Detector:**
<img alt="Moving Reference Detector" src="2Moving Reference Detector.jpg">

**Analog Receiver FIFO Waveform Example:**
<img alt="Analog Receiver FIFO Waveform Example" src="3Analog Receiver FIFO Waveform Example.png">

**Downsampler Waveform Example:**
<img alt="Downsampler Waveform Example" src="4Downsampler Waveform Example.png">

**Receiver Gain Control Waveform Example:**
<img alt="Receiver Gain Control Waveform Example" src="5Receiver Gain Control Waveform Example.png">

**FFT Frame Generator Waveform Example:**
<img alt="FFT Frame Generator Waveform Example" src="6FFT Frame Generator Waveform Example.png">

**FFT 2N Post Processor:**
<img alt="FFT 2N Post Processor" src="7FFT 2N Post Processor.png">

**DSP Core Xilinx FPPGA Waveform:**
<img alt="DSP Core Xilinx FPPGA Waveform" src="8DSP Core Xilinx FPPGA Waveform.jpg">

**DSP Core Altera FPGA Waveform:**
<img alt="DSP Core Altera FPGA Waveform" src="9DSP Core Altera FPGA Waveform.jpg">