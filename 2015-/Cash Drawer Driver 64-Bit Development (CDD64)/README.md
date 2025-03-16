# Cash Drawer Driver 64-Bit Development (CDD64)
The primary objective for CDD64 project was upgrading and **modifying currently** used cash drawer **kernel driver** for PAR EverServ 7000 and EverServ 7200 models into a 64-bit driver using **Kernel-Mode Driver Framework (KMDF)**. The project also required providing **WMI support** for the driver, updating **demo application**, providing support to **debug and test the driver**. An **installation package** was also developed as a part of the project.

### My Role
-	**Code review**.
-	**Kernel driver development** (re-implementing driver model).
-	**Kernel driver debugging** and **testing**.
-	Technical **documentation** support.
-	**Communication** with Customer.

### Tools & Technologies
C/C++, Widows Driver Model (WDM), Windows Driver Kit (WDK) 8.0, Windows Driver Framework (WDF), Kernel-Mode Driver Framework (KMDF), MFC, Microsoft Visual Studio 2012, Windows Installer XML (WiX) toolset, kernel driver debugging tools.

<hr>

##
**Cash Drawer Terminal:**
<img alt="Cash Drawer Terminal" src="0Cash Drawer Terminal.jpg">

**Cash Drawer Driver Development Description:**
You can view the [Development Description](8Cash%20Drawer%20Driver%20Development%20Description.pdf) for more detailed information.

**Cash Drawer API Test:**
<img alt="Cash Drawer API Test" src="1Cash Drawer API Test.png">

**Cash Drawer Driver TraceView:**
<img alt="Cash Drawer Driver TraceView" src="2Cash Drawer Driver TraceView.png">

**Cash Drawer Driver Functional Diagram:**
<img alt="Cash Drawer Driver Functional Diagram" src="3Cash Drawer Driver Functional Diagram.png">

**Cash Drawer Function Calls:**
<img alt="Cash Drawer Function Calls" src="4Cash Drawer Function Calls.png">

**Cash Drawer Driver State Diagram:**
<img alt="Cash Drawer Driver State Diagram" src="5Cash Drawer Driver State Diagram.png">

**Cash Drawer Driver Time Diagram:**
<img alt="Cash Drawer Driver Time Diagram" src="6Cash Drawer Driver Time Diagram.png">

**IO request path through a KMDF driver:**
<img alt="IO request path through a KMDF driver" src="7IO request path through a KMDF driver.png">