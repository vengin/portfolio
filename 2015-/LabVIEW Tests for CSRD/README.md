# Cab Signal Receiver Modulator (CSRD) LabVIEW Integration Testing
The goal of the project was to build **test framework** to demonstrate, that the **FPGA firmware** interacts with other **PCB components** properly, performing its intended functions. The final test framework was implemented as a series of semi-automated **LabVIEW tests**. Most tests required interactions between FPGA firmware (Xilinx/Altera FPGAs with NIOS soft-processors) and PCB devices (a full range of digital and analog circuitry).

## My Role
-	 **Code review**, customer **schematics** review.
- Implementing **LabVIEW functional tests**.
-	Verifying, testing and debugging entire system.
- Implementing **NIOS II Embedded C** code for LabVIEW tests.
- **Hardware verification**, testing and debugging.
- Technical **documentation** support (Test Reports and Records).
- **Communication** with Customer.

## Tools & Technologies
LabVIEW, Verilog, Embedded C, FPGA, Altera Quartus II 10.1, Xilinx ISE 12.4, Modelsim SE 6.5b, TCL, DO-254.

<hr>

##
**CSRD Programmable Hardware (PHW) and Hardware (HW) Integration Test Setup:**
<img alt="CSRD PHW-HW Integration Test Setup" src="00CSRD PHW-HW Integration Test Setup.png">

**Waveform Filter Front Panel VI (4KHz and Impulse3):**
<img alt="Waveform Filter Front Panel VI (4KHz and Impulse3)" src="01Waveform Filter Front Panel VI (4KHz and Impulse3).png">

**Impulse Polarity Finder (Front Panel VI):**
<img alt="Impulse Polarity Finder (Front Panel VI)" src="02Impulse Polarity Finder (Front Panel VI).png">

**Polarity Algorithm Illustration (Front Panel VI):**
<img alt="Polarity Algorithm Illustration (Front Panel VI)" src="03Polarity Algorithm Illustration (Front Panel VI).png">

**Filter Test (Front Panel VI):**
<img alt="Filter Test (Front Panel VI)" src="04Filter Test (Front Panel VI).png">

**Montreal - Configure Detector (Front Panel VI):**
<img alt="Montreal - Configure Detector (Front Panel VI)" src="05Montreal - Configure Detector (Front Panel VI).png">

**Configure Gain Control - RX1 and RX2 (Front Panel VI):**
<img alt="Configure Gain Control - RX1 and RX2 (Front Panel VI)" src="06Configure Gain Control - RX1 and RX2 (Front Panel VI).png">

**Configure SelfTest (Front Panel VI):**
<img alt="Configure SelfTest (Front Panel VI)" src="07Configure SelfTest (Front Panel VI).png">

**Variable Amplitude Sine Wave Generator (Front Panel VI):**
<img alt="Variable Amplitude Sine Wave Generator (Front Panel VI)" src="08Variable Amplitude Sine Wave Generator (Front Panel VI).png">

**Configure Receiver Control (Front Panel VI):**
<img alt="Configure Receiver Control (Front Panel VI)" src="09Configure Receiver Control (Front Panel VI).png">

**Configure Detector (Front Panel VI):**
<img alt="Configure Detector (Front Panel VI)" src="10Configure Detector (Front Panel VI).png">

**Determine Code Rate Montreal (Front Panel VI):**
<img alt="Determine Code Rate Montreal (Front Panel VI)" src="11Determine Code Rate Montreal (Front Panel VI).png">
