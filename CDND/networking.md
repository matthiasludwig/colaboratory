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

## Frame Structure

Ethernet Packet = Layer 1

* Preamble - 7 bytes
* Start of the frame delimiter - 1 byte
* Destination MAC - 6 bytes
* Source MAC - 6 bytes
* Optional Header (802.1 Q) - 4 bytes
* Frame Type - 2 bytes
* Payload - 46 - 1500 bytes (Would then include IP, then TCP, etc.)
* Frame Check Sequences (FCS) - 4 bytes
* Interpacket Gap - 12 bytes

## Virtual LANs

* Logical segment a switch into different network areas
* VLAN1 - 192.168.1.0/24 | VLAN2 - 192.168.2.0/24 | VLAN3 - 192.168.3.0/24
* To handle inter-VLAN routing we need a Layer 3 Switch (to do the Routing)

## FQDN - Fully Qualified Domain Name

A FQDN consists of the `hostname` + `domain` + `toplevel domain (TLD)`.

For example: www.udacity.com

* `www` = hostname
* `udacity` = domain
* `com` = TLD

## DNS - Domain Name System

![img/FQDN_resolution.png](Picture of the resolution of a new DNS request)

## Load Balancer

Most common approaches of Load Balancing:

* Round Robin - Requests are distributed sequentially among the ressources
* BGP Anycast - This allows multiple servers to advertise the same IP address
* Policy-based DNS load balancing - Uses policies to load balance traffic requests
* Dedicated Load Balancing - Enables you to deploy and configure one or more custom load-balancers within a VPC
