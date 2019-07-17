# MV440 Video Collector

The following project provides an implementation of the MMI-Protocol used by all Siemens Code-reading camera of the familly MVx40

## Prerequisites

Please make sure NodeJs is installed.

## Getting Started

1. Make a copy of the project or clone this git repository on your local machine for development and testing purposes.
2. Open ``index.js`` and change the variable ``var IP_ADDRESS = "192.168.1.53";`` and ``var PORT = 8765;`` to set the IP-Address and Port of the diagnose server.
3. Run the following command:
```
npm update
```
4. To start the application, run the following command:
```
npm start
```
5. A new folder with the name ``"data"`` will be created and the transmitted images will be stored inside.

## Authors

* **Jupiter Bakakeu** - *Initial work* - [FAPS - Siemens](https://faps.de) – Jupiter.Bakakeu@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
