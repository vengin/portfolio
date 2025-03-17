# Digital Controller Board (ECT-DGCB-3045)

<a href="https://www.amd.com/en/search/adaptive-socs-and-fpgas/partner-solutions.html#/6734" target="_blank">
  <b>Product Page</b><br>
  <img src="https://impartner.blob.core.windows.net/prm/a879fbeeabc548978fc6c9990329905d/_/320x200.png?sv=2018-03-28&sr=b&sig=MYak%2FMxnWHuA1jQCyYsoa%2Fbm7BQ%2FAyxBhGXySZYF61E%3D&se=2025-03-16T16%3A00%3A00Z&sp=r" alt="Product Page" width="200">
</a><br>

This project involved a **complete FPGA/Embedded C development cycle** with **board bring-up** for a Digital Controller Board (DGCB) - a Computer-On-Module (COM), that has **multiple consumer/industrial applications**. It is based on **Zynq 7000 SoC** powerful platform, offering a combination of **FPGA** and **1 GHz Dual core ARM processor**. It has a **credit card sized** form factor design, allowing **easy integration** with existing products in various form factors such as Com Express, PCIe 104 or others. DGCB is **Azure IoT ready**, adaptable to **Google or Amazon Cloud**, targeting such application as **Embedded IoT, Signal Processing, Machine Control, Edge IIoT Applications, Industrial Vision**, etc.

### My Role
- **Schematics** review and modifications across several board revisions.
- **Vivado FPGA** development.
- **Vitis Embedded C** *Build-In-Self-Test (BIST)* application with custom **First-Stage-Boot Loader (FSBL)**.
- Full **board bring up** with **hardware debugging and verifying**.
- Assisting in **PetaLinux** built.
- Technical documentation support, mentoring junior developers.

### Tools & Technologies
Vivado, Vitis, Zynq 7000 SoC FPGA, Verilog, Embedded C, Firmware development, BIST, Board Bring-up, FSBL, Petalinux.

<hr>

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