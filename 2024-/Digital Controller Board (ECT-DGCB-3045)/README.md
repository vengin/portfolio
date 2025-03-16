# Digital Controller Board (ECT-DGCB-3045)


<a href="https://www.amd.com/en/search/adaptive-socs-and-fpgas/partner-solutions.html#/6734" target="_blank">
  <b>Product Page</b><br>
  <img src="https://mm.digikey.com/Volume0/opasdata/d220001/derivates/6/001/163/582/MFG_DGCB-3045---30_web%28640x640%29.jpg" alt="Product Page" width="200">
</a><br>

This project required a **full FPGA and Embedded C development** with **board bring-up** for Digital Controller Carrier Board (ECT-DGCB-BB). This Base Board is compatible with **Ectron Digital Controller (ECT-DGCB)** daughter board, as well as **Raspberry Pi\LoRaWAN** boards. It has a rich set of interfaces specifically meant for developing the **IoT applications**: Raspberry Pi HAT, Gigabit Ethernet, USB 2.0, Two Mini PCIe x1 (5Gb), LCD, SD Card, Digital Outputs, Analog&Digtal I/O. It is based on **Zynq 7000 SoC** innovative  platform, offering a combination of powerful **FPGA** and **1 GHz Dual core ARM processor**.

### My Role

- Resolving **schematics** problems.
- **FPGA** development in **Vivado**.
- **Embedded C** *Build-In-Self-Test (BIST)* application in **Vitis** with custom **First-Stage-Boot Loader (FSBL)**.
- Full **board bring up** with **hardware debugging and verifying**.
- Assisting in **PetaLinux** built.
- Technical and documentation support, managing junior developers.

### Tools & Technologies
Vivado, Vitis, Zynq 7000 SoC FPGA, Verilog, Embedded C, Firmware development, BIST, Board Bring-up, FSBL, Petalinux.

<hr>

##
**DGCB Board Photo with Components Call-outs:**
<img alt="DGCB Board Photo with Components Call-outs" src="01DGCB Board Photo with Components Call-outs.jpg">

**DGCB Product Brief:**
You can view the [product brief](11DGCB%20Product%20Brief.pdf) for more detailed information.

**DGCB Board High-Level Block Diagram:**
<img alt="DGCB Board High-Level Block Diagram" src="02DGCB Board High-Level Block Diagram.png">

**DGCB Board High-Level Block Diagram:**
<img alt="DGCB Board High-Level Block Diagram" src="03DGCB Board High-Level Block Diagram.png">

**DGCB Vivado Block Diagram:**
<img alt="DGCB Vivado Block Diagram" src="04DGCB Vivado Block Diagram.png">

**DGCB Power Distribution Tree and Power-on-Sequence:**
<img alt="DGCB Power Distribution Tree and Power-on-Sequence" src="05DGCB Power Distribution Tree and Power-on-Sequence.png">

**DGCB Clocks and Reset Tree:**
<img alt="DGCB Clocks and Reset Tree" src="06DGCB Clocks and Reset Tree.png">

**DGCB I2C interfaces:**
<img alt="DGCB I2C interfaces" src="07DGCB I2C interfaces.png">

**DGCB Si5338 Quad Clock Generator Configuration:**
<img alt="DGCB Si5338 Quad Clock Generator Configuration" src="08DGCB Si5338 Quad Clock Generator Configuration.png">

**DGCB Base Board + Power Board (Stack):**
<img alt="DGCB Base Board + Power Board (Stack)" src="09DGCB Base Board + Power Board (Stack).jpg">

**Built-In-Self-Test (BIST) Application Log (all tests PASS):**
You can view the [BIST application log](10Built-In-Self-Test%20(BIST)%20Application%20Log%20(all%20tests%20PASS).txt) for more detailed information.