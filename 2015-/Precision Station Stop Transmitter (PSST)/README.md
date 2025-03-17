# Precision Station Stop Transmitter (PSST) FPGA module
The main objective of this project was **FPGA** modules **design, development and testing** for Precision Station Stop (PSS) Transmitter module in **VHDL**. The board itself was a new product intended to provide **one hardware design**, that could be adapted to **three different functions** (including Precision Station Stop). The main purpose of PSS mode is to provide **train high precision positioning** at a station. This is achieved via transmitting a **wide-band signal**, that causes **resonance** with a tuned wayside circuit at a **specific frequency**, which can then be **detected as a marker for position**.

### My Role
-	**Onsite project kick-off** with requirements gathering.
-	**VHDL development** for PSST module in Altera Cyclone II FPGA.
-	**Verification/testing** both in software and hardware.
-	Technical **documentation** support.
-	**Communication** with Customer.

### Tools & Technologies
Altera Quartus II 8.1, FPGA, VHDL, ModelSim v6.1e, MATLAB (Signal Processing, Compiler, Report Generator), TCL.

<hr>

**PSS Transmitter Architecture:**
<img alt="PSS Transmitter Architecture" src="00PSS Transmitter Architecture.png">

**Vital System Board Development Product Brief:**
You can view the [Vital System Board Development Product Brief](00Vital%20System%20Board%20Development%20Product%20Brief.pdf) for more detailed information.

**PSS Transmitter Block Diagram:**
<img alt="PSS Transmitter Block Diagram" src="01PSS Transmitter Block Diagram.png">

**PSS Receiver Block Diagram:**
<img alt="PSS Receiver Block Diagram" src="02PSS Receiver Block Diagram.png">

**PSS Transmitter Interface Diagram:**
<img alt="PSS Transmitter Interface Diagram" src="03PSS Transmitter Interface Diagram.png">

**FFT Spectrum for 10 Detected Frequencies:**
<img alt="FFT Spectrum for 10 Detected Frequencies" src="04FFT Spectrum for 10 Detected Frequencies.png">

**Frequency Synthesizer Module:**
<img alt="Frequency Synthesizer Module" src="05Frequency Synthesizer Module.png">

**Numerical Control Oscillator (NCO) Block Diagram:**
<img alt="Numerical Control Oscillator (NCO) Block Diagram" src="06Numerical Control Oscillator (NCO) Block Diagram.png">

**Numerical Control Oscillator (NCO) Configuration with Output Frequency Spectrum:**
<img alt="Numerical Control Oscillator (NCO) Configuration with Output Frequency Spectrum" src="07Numerical Control Oscillator (NCO) Configuration with Output Frequency Spectrum.png">

**DSP Core Xilinx FPGA Waveform:**
<img alt="DSP Core Xilinx FPGA Waveform" src="08DSP Core Xilinx FPGA Waveform.jpg">

**DSP Core Altera FPGA Waveform:**
<img alt="DSP Core Altera FPGA Waveform" src="09DSP Core Altera FPGA Waveform.jpg">

**FFT Core:**
<img alt="FFT Core" src="10FFT Core.jpg">

**DSP Core:**
<img alt="DSP Core" src="11DSP Core.jpg">