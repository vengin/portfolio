# Stand Equipment for PCB Programming and Testing
The objective was to develop a multi-purpose stand equipment (controlled from PC) for programming and testing 3 sets of PCBs. As a major developer I solved a vast number of issues: assisting in overall design concept and structure planning, assisting in hardware design, implementing FPGA and MCU firmware, software development and testing, writing drivers and GUI, documentation support. Stand equipment consisted of several independent PCB: Power Board, Control Board, Backplane Board, Analog Signal Board, Stepper Motor Control Board. Hardware/firmware components included Spartan-II FPGA, 3 CPLDs, 2 Silicon Labs MCU (C8051F320, C8051F340). Several different methods were implemented to program both internal and external hardware components: SPI-flash AT45DB041B, I2C EEPROM AT17C/LV, FRAM FM18L08, Spartan-II FPGA, MCU flash, USBXperss bootloader. I was responsible for interfaces and dataflow management across several PCBs (using SPI, UART, I2C, GPIO), created an interface to a host PC via USB. A set of algorithms was developed to verify various aspects of the equipment under test: signals and busses connectivity, analog signal verification (waveform generator with programmable characteristics (period, magnitude) and signal shapes (saw, meander, sinus, arbitrary or mixed)); memory tests; FPGA and microprocessors configuration and unit testing, etc. Software solutions required overall system control from PC (via USB), GUI interface. Also I was involved in documentation support (user manual, technical applications) and performed field-tests.

### My Role
-	Designing project architecture.
-	Hardware design (partial PCB schematics).
-	Implementing FPGA firmware for various Xilinx FPGAs (Spartan, Spartan-II) and CPLDs (CoolRunner-II, CoolRunner XPLA3, XC9500XL).
-	Implementing MCU firmware (Silabs MCU C8051F32x, C8051F34x).
-	Implementing PC software with GUI for operator.
-	Debugging, verification and testing.
-	Mathematical modeling and simulation of verification algorithms.
-	Technical documentation support.

### Tools & technologies
Xilinx ISE, Active-HDL, Keil uVision, MSVC 2008, MFC, MATLAB, USB, SVN, P-CAD.

<hr>

**Stand with Board to Test Inserted:**
<img alt="Stand with Board to Test Inserted" src="0Stand with Board to Test Inserted.jpg">

**Stand showing Board Connector:**
<img alt="Stand showing Board Connector" src="1Stand showing Board Connector.jpg">

**Stand Management Application - Board 01 Tests Control Interface:**
<img alt="Stand Management Application - Board 01 Tests Control Interface" src="2Stand Management Application - Board 01 Tests Control Interface.jpg">

**Stand Management Application - DAC Waveforms:**
<img alt="Stand Management Application - DAC Waveforms" src="3Stand Management Application - DAC Waveforms.jpg">

**Stand EEPROM Memory Connector:**
<img alt="Stand EEPROM Memory Connector" src="4Stand EEPROM Memory Connector.jpg">

**Stand Power with, USB Connector:**
<img alt="Stand Power with, USB Connector" src="5Stand Power with, USB Connector.jpg">
