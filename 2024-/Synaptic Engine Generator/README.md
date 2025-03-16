# Synaptic Engine Generation
The objective of the project was **FPGA and Embedded C design, implementation and verification of Synaptic Engine Generator** - a patented neuromorphic graph engine inspired by human brain. It is a highly **reconfigurable FPGA/ASIC** Engine Generation, optimized to **adapt and run a standard algorithm or set of algorithms (C/C++ or Python Development) on dynamically generated custom FPGA/ASIC designs**. It is based on the **scheduling engine technology**, that plugs into the back end of a standard compiler front end, to provide an average of **x6 speedup**, enabling customers an**easy-to-use, low-power high-performance processors with unique architecture**.
The project was tested on various **Altera (Intel) SoC FPGAs (Cyclone V, Arria V, Arria10)** as well as **Xilinx Zynq 7000 SoC**. It was also estimated as a **custom ASIC** solution, providing up to **x15 performance boost**, with low power consumption, targeting various embedded edge processing applications (Image Processing, Machine Learning, Robotics and Controls, Data Analytics and ML).


### My Role:
- **System Design**.
- Reviewing and suggesting **schematics** changes.
- Full **FPGA development** cycle in **Altera Quartus** and in **Xilinx Vivado**.
- Extensive design **simulation** in Active-HDL and ModelSim.
- Hardware debugging and testing.
- Developing **custom Image and Video processing cores**, performing **Matlab co-simulation**.

###Tools & Technologies:
Altera SoC FPGAs (CycloneV/ArriaV/Arria10), Xilinx Zynq7000 SoC FPGA, Altera Quartus, Xilinx Vivado, VHDL, Active-HDL, ModelSim, Embedded C, system design, hardware verification.

<hr>

**Synaptic Engine Generator FPGA Block Diagram:**
<img alt="Synaptic Engine Generator FPGA Block Diagram" src="00Synaptic Engine Generator FPGA Block Diagram.png">

**Top Level Architecture:**
<img alt="Top Level Architecture" src="01Top Level Architecture.png">

**Tool Flow:**
<img alt="Tool Flow" src="02Tool Flow.png">

**Graph Engine Emulator:**
<img alt="Graph Engine Emulator" src="03Graph Engine Emulator.jpg">

**Quartus QSys Sub-System:**
<img alt="Quartus QSys Sub-System" src="04Quartus QSys Sub-System.png">

**Synaptic Engine Kernel Block Symbol:**
<img alt="Synaptic Engine Kernel Block Symbol" src="05Synaptic Engine Kernel Block Symbol.png">

**Instructions Flow Example:**
<img alt="Instructions Flow Example" src="06Instructions Flow Example.png">

**Tracing Program Example for ADD Instruction:**
<img alt="Tracing Program Example for ADD Instruction" src="07Tracing Program Example for ADD Instruction.png">

**Routing Utilization Heatmap for CycloneV (5CEFA7) FPGA:**
<img alt="Routing Utilization Heatmap for CycloneV (5CEFA7) FPGA" src="08Routing Utilization Heatmap for CycloneV (5CEFA7) FPGA.jpg">

**Waveform for (LD, ST) Commands:**
<img alt="Waveform for (LD, ST) Commands" src="09Waveform for (LD, ST) Commands.png">

**Xceler Pitch:**
See this [Xceler Pitch](10Xceler%20Pitch.pdf) for more information.