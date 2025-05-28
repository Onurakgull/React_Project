from pysnmp.hlapi import *

iterator = getCmd(
    SnmpEngine(),
    CommunityData('public', mpModel=0),  # SNMPv1
    UdpTransportTarget(('demo.snmplabs.com', 161), timeout=2, retries=1),
    ContextData(),
    ObjectType(ObjectIdentity('SNMPv2-MIB', 'sysDescr', 0))
)

errorIndication, errorStatus, errorIndex, varBinds = next(iterator)

if errorIndication:
    print("SNMP Error:", errorIndication)
elif errorStatus:
    print(f"{errorStatus.prettyPrint()} at {errorIndex}")
else:
    for varBind in varBinds:
        print("SNMP Response:", varBind)
