from pysnmp.hlapi import SnmpEngine, CommunityData, UdpTransportTarget, ContextData, ObjectType, ObjectIdentity, getCmd

iterator = getCmd(
    SnmpEngine(),
    CommunityData('public', mpModel=1),
    UdpTransportTarget(('demo.snmplabs.com', 161)),
    ContextData(),
    ObjectType(ObjectIdentity('1.3.6.1.2.1.1.1.0')),  # sysDescr
)

errorIndication, errorStatus, errorIndex, varBinds = next(iterator)

if errorIndication:
    print('Error:', errorIndication)
elif errorStatus:
    print('SNMP Error:', errorStatus.prettyPrint())
else:
    for varBind in varBinds:
        print(f'{varBind[0]} = {varBind[1]}')
