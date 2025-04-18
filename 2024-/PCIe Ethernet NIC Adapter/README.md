# PCIe Ethernet NIC Adapter
The objective of the project was to create **PCIe Ethernet NIC Adapter**, enabling **high-speed data transfer** between **network (Ethernet)** and **Host memory (PCIe)**.
The project was based on **Zynq 7000 SoC FPGA** (featuring **Dual ARM Cortex-A9** processors), with:
- **x4 lane PCIe Endpoint** at **5 Gb/s (Gen2) speed**
- **Gigabit Ethernet**

### My Role
- **Full board bring-up**, starting from **reviewing and suggesting schematics changes**.
- Implementing **Vivado&Vitis test design** (for board debug purposes).
- Implementing **performance-oriented design** (release\delivery).
- Participating in **Petalinux image** creation for the release Vivado design.
- Solving issues with **PCI XDMA Windows & Linux drivers**.
- Supervising junior firmware developers.

### Tools & Technologies
Vivado, Vitis, Zynq 7000 SoC, PCI Express, pcie xdma driver, Petalinux.

<hr>

**NIC Board Components Explained:**
<img alt="NIC Board Components Explained" src="0NIC Board Components Explained.png">

**EСT-KRIA-EVK Product Brief:**
You can view the [Board Quick Start](1NIC%20Board%20Quick%20Start.pdf) for more detailed information.

**NIC Data Flow:**                      
<img alt="NIC Data Flow" src="1NIC Data Flow.jpg">

**NIC Block Diagram:**
<img alt="NIC Block Diagram" src="2NIC Block Diagram.png">

**NIC Vivado Block Design:**
<img alt="NIC Vivado Block Design" src="3NIC Vivado Block Design.png">

**NIC Plugged in Board Photo:**
<img alt="NIC Plugged in Board Photo" src="4NIC Plugged in Board Photo.jpg">

**Zynq Block Design:**                      
<img alt="Zynq Block Design" src="5Zynq Block Design.png">

**Zynq Processing System Diagram:**
<img alt="Zynq Processing System Diagram" src="6Zynq Processing System Diagram.jpg">