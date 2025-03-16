# LabVIEW Hardware-In-the-Loop (HIL) Tests for Embedded Machine Monitor (ECT-EMM)

This project required building **LabVIEW based test system**, to fully automate **Hardware-in-the-Loop (HIL)** verification, **streamline** testing process and significantly **reduce** product validation time. The key functionality implemented in LabVIEW included:
- Full control of UUT I/O, i.e. **power supply, boot, Digital I/O, Analog I/O (signal generator, digital multimeter)**.
- Full support of custom **communication UART interface** with UUT, to **program critical parameters** and **getting feedback**.
- Imitating **unsafe events** to detect UUT **fast response**.
- Tests with **high degree of stability and accuracy** for analog speed signal and 4 to 20 mA lines.
- **HART connectivity** tests for basic commands.
- **Queuing LabVIEW tasks** with asynchronous execution.

### My Role
- Implementing **LabVIEW** code.
- **Hardware/firmware testing and debugging**.
- **Schematics** review.
- Detailed **documentation** support.

### Tools & Technologies
LabVIEW, Digital Signal Processing (DSP), HART protocol, ADSP-CM40x processor, Hardware-In-the-Loop (HIL) testing.

<br>
##
**LabVIEW HIL Tester Setup:**
<img alt="LabVIEW HIL Tester Setup" src="00LabVIEW HIL Tester Setup.jpg">

**LabVIEW HIL Tester Connectivity:**
<img alt="LabVIEW HIL Tester Connectivity" src="02LabVIEW HIL Tester Connectivity.jpg">

**OSM Test LabVIEW Project Items:**
<img alt="OSM Test LabVIEW Project Items" src="04OSM Test LabVIEW Project items.png">

**OSM Test Top (Front Panel LabVIEW VI):**
<img alt="OSM Test Top (Front Panel LabVIEW VI)" src="05OSM Test Top (Front Panel LabVIEW VI).png">

**Solar Overspeed Monitor (Front Panel LabVIEW VI):**
<img alt="Solar Overspeed Monitor (Front Panel LabVIEW VI)" src="06Solar Overspeed Monitor (Front Panel LabVIEW VI).png">

**OSM Test Top (Block Diagram LabVIEW VI):**
<img alt="OSM Test Top (Block Diagram LabVIEW VI)" src="07OSM Test Top (Block Diagram LabVIEW VI).png">

**LabVIEW OSM Read Code Example:**
<img alt="LabVIEW OSM Read Code Example" src="08LabVIEW OSM Read Code Example.jpg">

**Digital IO In (Front Panel LabVIEW VI):**
<img alt="Digital IO In (Front Panel LabVIEW VI)" src="09Digital IO In (Front Panel LabVIEW VI).png">

**Print Overspeed Monitor Test Report (Front Panel LabVIEW VI):**
<img alt="Print Overspeed Monitor Test Report (Front Panel LabVIEW VI)" src="10Print Overspeed Monitor Test Report (Front Panel LabVIEW VI).png">

**OSM Serial Port (Block Diagram LabVIEW VI):**
<img alt="OSM Serial Port (Block Diagram LabVIEW VI)" src="11OSM Serial Port (Block Diagram LabVIEW VI).png">

**Test Frequency Accuracy (Block Diagram LabVIEW VI):**
<img alt="Test Frequency Accuracy (Block Diagram LabVIEW VI)" src="12Test Frequency Accuracy (Block Diagram LabVIEW VI).png">

**OSM Write (Front Panel LabVIEW VI):**
<img alt="OSM Write (Front Panel LabVIEW VI)" src="13OSM Write (Front Panel  LabVIEW VI).png">

**Power Supply Tool:**
<img alt="Power Supply Tool" src="14Power Supply Tool.png">
