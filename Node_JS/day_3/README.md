
## ❔What is OS Moule?
The os module in Node.js provides operating system-related utility methods and properties. It helps retrieve system information such as CPU details, memory usage, and network interfaces, enabling you to write system-aware applications.

## 🔍 Node.js OS Module - Key Methods Overview
| 🆔 No. | 🛠️ Method / Property    | 📄 Description                                                         | 📥 Output Type  | 🔍 Example Output                          |
| ------ | ------------------------ | ---------------------------------------------------------------------- | --------------- | ------------------------------------------ |
| 1️⃣    | `os.arch()`              | Returns the CPU architecture                                           | `string`        | `'x64'`, `'arm'`, `'ia32'`                 |
| 2️⃣    | `os.platform()`          | Returns the platform of the OS                                         | `string`        | `'win32'`, `'linux'`, `'darwin'`           |
| 3️⃣    | `os.cpus()`              | Returns an array of objects containing CPU core details                | `Array<Object>` | `[ { model, speed, times }, ... ]`         |
| 4️⃣    | `os.freemem()`           | Returns the amount of free memory (in bytes)                           | `number`        | `859832320`                                |
| 5️⃣    | `os.totalmem()`          | Returns the total memory available (in bytes)                          | `number`        | `17179869184`                              |
| 6️⃣    | `os.hostname()`          | Returns the hostname of the OS                                         | `string`        | `'DESKTOP-XYZ'`                            |
| 7️⃣    | `os.type()`              | Returns the OS name                                                    | `string`        | `'Windows_NT'`, `'Linux'`, `'Darwin'`      |
| 8️⃣    | `os.release()`           | Returns the OS release version                                         | `string`        | `'10.0.19045'`                             |
| 9️⃣    | `os.uptime()`            | Returns system uptime in seconds                                       | `number`        | `1034572`                                  |
| 🔟     | `os.networkInterfaces()` | Returns information about network interfaces                           | `Object`        | `{ eth0: [ { address, family, ... } ] }`   |
| 1️⃣1️⃣ | `os.userInfo()`          | Returns information about the current user                             | `Object`        | `{ username, uid, gid, homedir, shell }`   |
| 1️⃣2️⃣ | `os.homedir()`           | Returns the home directory of the current user                         | `string`        | `'/Users/username'`, `'C:\\Users\\Megha'`  |
| 1️⃣3️⃣ | `os.tmpdir()`            | Returns the operating system's default temp directory                  | `string`        | `'/tmp'`, `'C:\\Users\\Megha\\AppData...'` |
| 1️⃣4️⃣ | `os.endianness()`        | Returns the byte order of the CPU architecture (`'BE'` or `'LE'`)      | `string`        | `'LE'`                                     |
| 1️⃣5️⃣ | `os.EOL`                 | Constant for the end-of-line marker (`\n` on Linux, `\r\n` on Windows) | `string`        | `'\n'` or `'\r\n'`                         |

## What is path ?
The node:path module provides utilities for working with file and directory paths. It can be accessed using:

``` js
 const path = require('node:path');
 ```
 