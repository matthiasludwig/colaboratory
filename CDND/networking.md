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

## OSI Model

* OSI - Open System Interconnection

Layers in the OSI Model:

1. Physical (DSL, etc.)
2. Data Link (Ethernet, 802.11, MAC/LLC, PPP, etc.)
3. Network (IP, ARP, IPSEC, etc.)
4. Transport (TCP, UDP, SCTP)
5. Session (Session enablement in TCP, RTP, SIP, SSL, TLS, etc.)
6. Presentation (HTML, DOC, Encryption, etc.)
7. Application (DNS, HTTP, SMTP, etc.)

Encapsulation and Decapsulation:

* _As the data is being packaged up on a sending device, the data moves down the OSI model; this process of the data moving down the OSI model is called encapsulation._
* _When the data is being unpacked on a receiving device, the data moves _up_ OSI model; this process of the data moving up the OSI model is called decapsulation._

LAN - Local Area Network (Without a Router). The Switch is buffering, managing speeds and routing the packages.
Unicast - 1:1
Multicast - 1:Many
Broadcast - 1:All (for example IP/MAC address)
