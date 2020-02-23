# Networking

## Network Communication Model

* Medium
* Adressing
* Content

![img/ip4address_space.png](Image of IPv4 Adress Space)

CIDR - Classless InterDomain Routing (for example: 192.168.178.22/24; 255.255.255.0; ff:ff:ff:00)

* Take the IP Address in Binary and AND-compare it with the Subnet in Binary => Beginning of the network block

*Reserved Blocks:*

* .0 is used for the indentification of the network
* .1 is normally assigned to the router
* .255 is the broadcast address. Anything send here will be send to all devices on the same net.
