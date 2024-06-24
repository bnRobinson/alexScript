const sampleText= `interface GigabitEthernet1/0/1

subscriber aging inactivity-timer 300 probe

switchport access vlan 144

switchport mode access

switchport nonegotiate

switchport voice vlan 644

srr-queue bandwidth share 10 10 60 20

queue-set 2

priority-queue out

 authentication periodic

authentication timer reauthenticate server

access-session port-control auto

mab

mls qos trust cos

dot1x pae authenticator

dot1x timeout tx-period 10

spanning-tree portfast edge

spanning-tree bpduguard enable

service-policy type control subscriber DOT1X-DEFAULT

ip dhcp snooping limit rate 100

!

interface GigabitEthernet1/0/2

subscriber aging inactivity-timer 300 probe

switchport access vlan 144

switchport mode access

switchport nonegotiate

switchport voice vlan 644

srr-queue bandwidth share 10 10 60 20

queue-set 2

priority-queue out

 authentication periodic

authentication timer reauthenticate server

access-session port-control auto

mab

mls qos trust cos

dot1x pae authenticator

dot1x timeout tx-period 10

spanning-tree portfast edge

spanning-tree bpduguard enable

service-policy type control subscriber DOT1X-DEFAULT

ip dhcp snooping limit rate 100

!

interface GigabitEthernet1/0/3

subscriber aging inactivity-timer 300 probe

switchport access vlan 144

switchport mode access

switchport nonegotiate

switchport voice vlan 644

srr-queue bandwidth share 10 10 60 20

queue-set 2

priority-queue out

 authentication periodic

authentication timer reauthenticate server

access-session port-control auto

mab

mls qos trust cos

dot1x pae authenticator

dot1x timeout tx-period 10

spanning-tree portfast edge

spanning-tree bpduguard enable

service-policy type control subscriber DOT1X-DEFAULT

ip dhcp snooping limit rate 100
`

export default sampleText; 
