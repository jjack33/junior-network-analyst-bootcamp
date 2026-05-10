const sections = [
  {
    id: "warmup",
    time: "00-10 minutes",
    title: "Warm-Up: Fix or Fail?",
    type: "fixFail",
    intro: "Show one scenario at a time. Students choose FIX if the setup should work or FAIL if the setup has a problem.",
    instructor: "Have students commit to FIX or FAIL, then reveal the reason and move to the next scenario.",
    banks: [
      {
        label: "Bank A",
        items: [
          {
            prompt: "PC IP: 192.168.1.5\nGateway: 10.0.0.1",
            answer: "FAIL",
            why: "They are not on the same subnet. The PC and gateway are on different streets."
          },
          {
            prompt: "Interface status: Administratively Down",
            answer: "FAIL",
            why: "Someone manually turned the port off. The fix is no shutdown."
          },
          {
            prompt: "You ping 127.0.0.1 and get a reply.",
            answer: "FIX",
            why: "The loopback reply means the computer's internal network stack is healthy."
          },
          {
            prompt: "A switch has 3 cables plugged in. All lights are solid amber.",
            answer: "FAIL",
            why: "This is likely Spanning Tree blocking traffic to prevent a loop."
          },
          {
            prompt: "Subnet mask: 255.255.255.0\nPC A: 192.168.1.10\nPC B: 192.168.1.20",
            answer: "FIX",
            why: "Both devices are in the same /24 neighborhood."
          },
          {
            prompt: "PC IP: 192.168.10.22\nMask: 255.255.255.0\nGateway: 192.168.10.1",
            answer: "FIX",
            why: "The host and gateway are in the same /24 network."
          },
          {
            prompt: "PC IP: 10.1.4.25\nMask: 255.255.255.0\nGateway: 10.1.5.1",
            answer: "FAIL",
            why: "With a /24 mask, 10.1.4.x and 10.1.5.x are different local networks."
          },
          {
            prompt: "Ethernet status: Media Disconnected",
            answer: "FAIL",
            why: "The physical link is down. Start with the cable, wall jack, or switch port."
          },
          {
            prompt: "PC can ping 8.8.8.8 but cannot browse to example.com.",
            answer: "FAIL",
            why: "IP connectivity works, but name resolution is likely failing."
          },
          {
            prompt: "DHCP enabled: Yes\nIP Address: 169.254.44.8",
            answer: "FAIL",
            why: "A 169.254 address usually means DHCP failed and APIPA assigned a fallback address."
          },
          {
            prompt: "Switch port light is green and blinking.",
            answer: "FIX",
            why: "A blinking green link light usually means the port is connected and passing traffic."
          },
          {
            prompt: "Default Gateway field is blank on a PC that needs Internet access.",
            answer: "FAIL",
            why: "Without a default gateway, the PC cannot leave its local network."
          }
        ]
      },
      {
        label: "Bank B",
        items: [
          {
            prompt: "PC IP: 10.0.0.5\nMask: 255.255.0.0\nGateway: 10.0.0.1",
            answer: "FIX",
            why: "With a /16 mask, 10.0.x.x is all one network, so the gateway is reachable."
          },
          {
            prompt: "DNS Server: blank\nPC can ping 8.8.8.8\nPC cannot open google.com",
            answer: "FAIL",
            why: "No DNS server means names cannot be resolved, even if IP routing works."
          },
          {
            prompt: "Duplex: Half\nSpeed: 100\nExpected: Full duplex gigabit",
            answer: "FAIL",
            why: "A duplex or speed mismatch causes collisions and poor performance."
          },
          {
            prompt: "Two PCs share IP 192.168.1.50 on the same switch.",
            answer: "FAIL",
            why: "Duplicate IPs cause an IP conflict, making both machines unreliable."
          },
          {
            prompt: "Switch port: Access\nVLAN: 10\nDevice needs VLAN 10",
            answer: "FIX",
            why: "The port is correctly assigned to the VLAN the device requires."
          },
          {
            prompt: "Firewall rule: DENY TCP any any port 443",
            answer: "FAIL",
            why: "Blocking port 443 prevents all HTTPS traffic, breaking secure web browsing."
          },
          {
            prompt: "PC IP: 172.16.5.10\nMask: 255.255.255.0\nGateway: 172.16.5.1",
            answer: "FIX",
            why: "The PC and gateway are both in the 172.16.5.x /24 network."
          },
          {
            prompt: "NIC driver: Not installed\nEthernet adapter: Unknown device",
            answer: "FAIL",
            why: "Without a driver, the OS cannot use the NIC — no driver means no network."
          },
          {
            prompt: "Ping result: Request timed out (4 of 4 packets lost)",
            answer: "FAIL",
            why: "100% packet loss means the destination is unreachable or blocking ICMP."
          },
          {
            prompt: "SSH enabled on router\nPort 22 open\nStrong password set",
            answer: "FIX",
            why: "SSH with a strong password is a secure, accepted remote management method."
          },
          {
            prompt: "Subnet: 192.168.1.0/24\nBroadcast address used as host IP: 192.168.1.255",
            answer: "FAIL",
            why: "The broadcast address cannot be assigned to a host."
          },
          {
            prompt: "Cable: Straight-through\nConnecting: PC to switch port",
            answer: "FIX",
            why: "Straight-through cables are correct for PC-to-switch connections."
          }
        ]
      }
    ]
  },
  {
    id: "sprint",
    time: "10-30 minutes",
    title: "Certification Sprint",
    type: "rapidQuiz",
    intro: "Read each question out loud. Students answer with reactions: thumbs up = A, heart = B, surprised = C, clap = D.",
    instructor: "Keep the pace quick. Reveal the correct letter, give the one-line reason, then move on.",
    banks: [
      {
        label: "Bank A",
        questions: [
      {
        q: "Which device uses MAC addresses to send data to the right port?",
        choices: ["Hub", "Switch", "Router", "Firewall"],
        answer: 1,
        why: "Switches learn MAC addresses and forward frames to the right port.",
        reasoning: "Eliminate by function: hubs broadcast to every port, routers use IP addresses, firewalls filter traffic. Only switches build a MAC table and forward frames to the correct port."
      },
      {
        q: "What is the brain of the computer's network connection?",
        choices: ["CPU", "NIC", "RAM", "SSD"],
        answer: 1,
        why: "The NIC is the network interface card.",
        reasoning: "The CPU processes, RAM stores, SSD holds data — but the NIC is the physical component that puts the machine on the network."
      },
      {
        q: "Which command shows your IP on a Mac or Linux machine?",
        choices: ["ipconfig", "ifconfig", "netstat", "ping"],
        answer: 1,
        why: "ifconfig is the classic Mac/Linux answer for this certification-style question.",
        reasoning: "ipconfig is Windows-only. On Mac and Linux the classic command is ifconfig. Modern Linux also accepts ip addr, but cert questions almost always expect ifconfig."
      },
      {
        q: "If a student's IP starts with 169.254.x.x, what is the problem?",
        choices: ["Internet is fast", "DHCP failed (APIPA)", "Virus", "Wrong cable"],
        answer: 1,
        why: "169.254 means the device self-assigned an APIPA address after DHCP failed.",
        reasoning: "When a Windows client gives up waiting for DHCP, it auto-assigns a 169.254 address. That address only reaches other APIPA hosts — nothing else. Troubleshoot DHCP before the website."
      },
      {
        q: "What layer of the OSI model is the Physical layer?",
        choices: ["Layer 1", "Layer 3", "Layer 7", "Layer 4"],
        answer: 0,
        why: "Physical cabling, ports, and signals are Layer 1.",
        reasoning: "Memorize bottom-up: 1=Physical, 2=Data Link (MAC), 3=Network (IP), 4=Transport (TCP/UDP), 5-7=Session/Presentation/Application."
      },
      {
        q: "Which protocol automatically assigns IP settings?",
        choices: ["DNS", "DHCP", "HTTP", "SSH"],
        answer: 1,
        why: "DHCP leases IP addresses and other network settings.",
        reasoning: "DNS resolves names, HTTP carries web pages, SSH is for remote login. DHCP is the only one that automatically hands out IP address, mask, gateway, and DNS server to clients."
      },
      {
        q: "Which protocol resolves names like example.com to IP addresses?",
        choices: ["DNS", "ARP", "NTP", "FTP"],
        answer: 0,
        why: "DNS translates hostnames into IP addresses.",
        reasoning: "ARP maps IP to MAC, NTP syncs clocks, FTP moves files. DNS is the directory service: you give it a name, it returns an IP address."
      }
        ]
      },
      {
        label: "Bank B",
        questions: [
      {
        q: "Which command tests whether another host responds?",
        choices: ["ping", "format", "mkdir", "copy"],
        answer: 0,
        why: "ping sends echo requests to test reachability and latency.",
        reasoning: "format, mkdir, and copy are file system commands. ping is the network reachability tool — it sends ICMP echo requests and reports round-trip time or timeout."
      },
      {
        q: "Which address is the loopback address?",
        choices: ["192.168.1.1", "8.8.8.8", "127.0.0.1", "169.254.1.1"],
        answer: 2,
        why: "127.0.0.1 tests the local TCP/IP stack.",
        reasoning: "192.168.1.1 is a common gateway, 8.8.8.8 is Google DNS, 169.254.x.x is APIPA. The entire 127.x.x.x block is loopback — pinging it tests the machine's own network stack."
      },
      {
        q: "What is the standard port for HTTPS?",
        choices: ["21", "53", "80", "443"],
        answer: 3,
        why: "HTTPS commonly uses TCP port 443.",
        reasoning: "Memorize the big four: HTTP=80, HTTPS=443, DNS=53, SSH=22. Cert questions test these constantly — know them without thinking."
      },
      {
        q: "Which device connects different IP networks?",
        choices: ["Switch", "Router", "Patch panel", "Hub"],
        answer: 1,
        why: "Routers move traffic between networks.",
        reasoning: "Switches connect hosts on the same network by MAC address. Routers connect different IP networks by routing between subnets. Patch panels and hubs don't make routing decisions."
      },
      {
        q: "Which address type does ARP help discover?",
        choices: ["MAC", "DNS", "URL", "SSID"],
        answer: 0,
        why: "ARP maps an IP address to a MAC address on the local network.",
        reasoning: "ARP = Address Resolution Protocol. You give it a known IP, it broadcasts on the local segment and receives back the MAC address of the device that owns that IP."
      },
      {
        q: "What does VLAN stand for?",
        choices: ["Virtual Local Area Network", "Verified LAN Access Node", "Variable Link Address Name", "Virtual Login Access Number"],
        answer: 0,
        why: "A VLAN creates a logical network segment.",
        reasoning: "Break it apart: Virtual = software-defined, Local Area Network = LAN. A VLAN segments one physical switch into multiple logical networks, separating broadcast domains."
      },
      {
        q: "Which command shows detailed Windows network settings, including MAC address?",
        choices: ["ipconfig /all", "ping /all", "show all", "net use"],
        answer: 0,
        why: "ipconfig /all shows adapter details including physical address.",
        reasoning: "ipconfig alone shows IP, mask, and gateway. The /all switch adds the physical (MAC) address, DHCP status, lease dates, DNS servers, and adapter description."
      }
        ]
      }
    ]
  },
  {
    id: "command",
    time: "30-45 minutes",
    title: "Choose the Next Command",
    type: "singleChoice",
    intro: "Students choose the best next troubleshooting command for each scenario.",
    instructor: "Push students toward bottom-up troubleshooting: verify the local device, then the gateway, then the path, then services.",
    banks: [
      {
        label: "Bank A",
        questions: [
      {
        prompt: "The Internet is down for everyone in the building. What do you do first?",
        choices: [
          "Check the Gateway: ping 192.168.1.1",
          "Check the Path: tracert 8.8.8.8",
          "Check your own IP: ipconfig",
          "Check the Switch: show vlan"
        ],
        answer: 2,
        why: "Always start with your own machine. If you do not have an IP, router checks are premature.",
        reasoning: "Bottom-up troubleshooting: start local. ipconfig reveals whether you even have an IP. If you see 169.254 or blank, the problem is on your device — there is nothing to gain from pinging a router yet."
      },
      {
        prompt: "A website loads, but it takes 20 seconds. Which command helps identify where the path slows down?",
        choices: ["ipconfig", "tracert 8.8.8.8", "hostname", "arp -a"],
        answer: 1,
        why: "tracert shows each hop on the route, which helps locate the slow segment.",
        reasoning: "tracert sends probes with incrementing TTL values, forcing each router to respond. The hop where latency spikes is the slow segment — that directs where to investigate next."
      },
      {
        prompt: "You need to confirm whether the default gateway responds before testing the Internet.",
        choices: ["ping 192.168.1.1", "nslookup example.com", "netstat -ano", "show vlan"],
        answer: 0,
        why: "Pinging the gateway confirms whether the local network path to the router works.",
        reasoning: "The gateway is the last hop you own. If ping 192.168.1.1 fails, the problem is between your machine and the router — no point testing the Internet until local connectivity is confirmed."
      },
      {
        prompt: "The user can ping 8.8.8.8 but cannot open example.com by name. What command should you try next?",
        choices: ["ipconfig /release", "nslookup example.com", "tracert 127.0.0.1", "show ip route"],
        answer: 1,
        why: "If IP works but names fail, test DNS resolution with nslookup.",
        reasoning: "Pinging an IP proves the data path works. The failure is in name-to-IP translation. nslookup queries DNS directly and shows exactly what the server returns — or if it times out."
      },
      {
        prompt: "A Windows PC has a 169.254.x.x address. Which command asks DHCP for a new address?",
        choices: ["ipconfig /renew", "ping 127.0.0.1", "tracert 8.8.8.8", "netstat"],
        answer: 0,
        why: "ipconfig /renew requests a new lease from DHCP.",
        reasoning: "169.254 = APIPA = DHCP failed. ipconfig /renew sends a fresh DHCP discovery broadcast. If DHCP responds, the machine gets a real address. If not, troubleshoot DHCP or the cable."
      },
      {
        prompt: "You want to see the MAC address, DNS servers, and DHCP status on Windows.",
        choices: ["ipconfig /all", "ping -t", "tracert", "hostname"],
        answer: 0,
        why: "ipconfig /all shows detailed adapter configuration.",
        reasoning: "Basic ipconfig only shows IP, mask, and gateway. The /all flag adds physical (MAC) address, DHCP enabled/disabled, lease dates, and configured DNS servers for every adapter."
      }
        ]
      },
      {
        label: "Bank B",
        questions: [
      {
        prompt: "You suspect a hostname is resolving to the wrong IP address.",
        choices: ["nslookup example.com", "ping 127.0.0.1", "ipconfig /release", "net use"],
        answer: 0,
        why: "nslookup checks DNS answers for a name.",
        reasoning: "nslookup bypasses the local hosts file and cache, querying the DNS server directly. It shows exactly which IP the server returns for that name — useful for spotting stale or wrong records."
      },
      {
        prompt: "You need to confirm your local TCP/IP stack works before testing the network.",
        choices: ["ping 127.0.0.1", "tracert 8.8.8.8", "show vlan", "nslookup"],
        answer: 0,
        why: "Pinging loopback tests the local network stack.",
        reasoning: "127.0.0.1 never leaves the machine. If ping 127.0.0.1 fails, the TCP/IP stack itself is broken — reinstall or reset it. If it succeeds, the stack is fine and the problem is external."
      },
      {
        prompt: "A user says the network is slow. You want a quick latency check to the gateway.",
        choices: ["ping 192.168.1.1", "ipconfig /all", "format", "show version"],
        answer: 0,
        why: "ping gives a fast reachability and latency test.",
        reasoning: "ping 192.168.1.1 reports round-trip time in milliseconds. Normal LAN latency is under 5ms. High ms or dropped packets to the gateway points to a local network or router issue."
      },
      {
        prompt: "You want to see active connections and listening ports on a Windows machine.",
        choices: ["netstat -ano", "ipconfig /renew", "tracert", "nslookup"],
        answer: 0,
        why: "netstat can show active connections and listening ports.",
        reasoning: "netstat -ano: -a shows all connections and listeners, -n shows raw IPs without DNS lookups, -o shows the process ID (PID) holding each socket. Use Task Manager to match PIDs to programs."
      },
      {
        prompt: "A switch troubleshooting question asks which VLAN a port belongs to.",
        choices: ["show vlan", "ping 8.8.8.8", "ipconfig", "nslookup"],
        answer: 0,
        why: "show vlan is the switch-side command for VLAN membership.",
        reasoning: "show vlan is a Cisco IOS command run on the switch itself, not the PC. It lists every VLAN ID, its name, and the ports assigned to it — essential for confirming port segmentation."
      }
        ]
      }
    ]
  },
  {
    id: "escape",
    time: "45-65 minutes",
    title: "The Zero-Cost Escape Room",
    type: "escape",
    intro: "Theme: The Silent Server Room. Students solve a sequence of lock codes.",
    instructor: "Accept minor spelling and capitalization differences. Reveal one lock at a time.",
    locks: [
      {
        label: "Puzzle 1: The Door",
        prompt: "The door code is the port number used for Web Browsing (HTTP).",
        answers: ["80"],
        success: "Door unlocked. HTTP uses port 80."
      },
      {
        label: "Puzzle 2: The Console",
        prompt: "To log in, you need the device that connects two different networks.",
        answers: ["router"],
        success: "Console accepted. A router connects different networks."
      },
      {
        label: "Puzzle 3: The Fix",
        prompt: "The server IP is 192.168.1.50 and the router is 192.168.1.1. What missing setting lets the server reach the Internet?",
        answers: ["default gateway", "gateway"],
        success: "Network restored. The missing setting is the default gateway."
      },
      {
        label: "Puzzle 4: The Secure Door",
        prompt: "The secure web console uses HTTPS. What standard port number opens the console?",
        answers: ["443"],
        success: "Secure console opened. HTTPS uses port 443."
      },
      {
        label: "Puzzle 5: The Address Problem",
        prompt: "A workstation shows 169.254.20.10. Which service most likely failed?",
        answers: ["dhcp", "dhcp server"],
        success: "Correct. A 169.254 address usually means DHCP failed."
      },
      {
        label: "Puzzle 6: The Local Test",
        prompt: "What IP address do you ping to test the local network stack on the same computer?",
        answers: ["127.0.0.1", "loopback"],
        success: "Loopback confirmed. 127.0.0.1 tests the local TCP/IP stack."
      },
      {
        label: "Puzzle 7: The Name Service",
        prompt: "The server can reach 8.8.8.8 but not google.com. Which service should you check?",
        answers: ["dns", "dns server"],
        success: "Correct. DNS is responsible for name resolution."
      },
      {
        label: "Puzzle 8: The Lease",
        prompt: "What protocol gives clients IP addresses automatically?",
        answers: ["dhcp"],
        success: "Correct. DHCP assigns IP settings."
      },
      {
        label: "Puzzle 9: The Switch Clue",
        prompt: "What Layer 2 address does a switch use to forward frames?",
        answers: ["mac", "mac address"],
        success: "Correct. Switches forward based on MAC addresses."
      },
      {
        label: "Puzzle 10: The Secure Shell",
        prompt: "What standard port is used by SSH?",
        answers: ["22"],
        success: "Correct. SSH uses port 22."
      },
      {
        label: "Puzzle 11: The Web Door",
        prompt: "What standard port is used by unsecured HTTP?",
        answers: ["80"],
        success: "Correct. HTTP uses port 80."
      },
      {
        label: "Puzzle 12: The Map",
        prompt: "What command shows the path traffic takes through routers on Windows?",
        answers: ["tracert"],
        success: "Correct. tracert shows router hops."
      }
    ]
  },
  {
    id: "detective",
    time: "65-80 minutes",
    title: "Network Detective",
    type: "singleChoice",
    intro: "Students investigate short case files and pick the most likely cause or next fix.",
    instructor: "Ask students which evidence matters most before revealing the answer.",
    banks: [
      {
        label: "Bank A",
        questions: [
      {
        prompt: "Case File: The Red Light Mystery. A user can't get to the shared drive. ipconfig shows Media Disconnected. What is the most likely fix?",
        choices: [
          "Reinstall the shared drive software",
          "Move the user to a different VLAN",
          "Check the physical cable",
          "Change the DNS server"
        ],
        answer: 2,
        why: "Media Disconnected points to Layer 1. The cable is likely unplugged or broken.",
        reasoning: "Media Disconnected means the NIC sees no signal. That is a Layer 1 symptom — the cable, wall jack, or switch port. Software fixes cannot restore a broken physical link."
      },
      {
        prompt: "A laptop can reach websites by IP address but not by name. Which service is the likely issue?",
        choices: ["DNS", "DHCP", "STP", "NTP"],
        answer: 0,
        why: "DNS turns names into IP addresses. If IP works but names fail, suspect DNS.",
        reasoning: "Separate the two symptoms: IP routing works (ping by IP succeeds), but name resolution fails. That cleanly isolates the fault to DNS. Test with nslookup to confirm which server is responding."
      },
      {
        prompt: "A PC has IP 192.168.1.25/24 and gateway 192.168.2.1. Local pings work, but Internet access fails.",
        choices: ["Wrong default gateway", "Bad monitor cable", "HTTPS blocked", "MAC address conflict"],
        answer: 0,
        why: "The gateway must be reachable from the PC's local subnet.",
        reasoning: "With a /24 mask, 192.168.1.x and 192.168.2.x are different subnets. The PC cannot reach a gateway on a different subnet. The gateway must be in the 192.168.1.x range."
      },
      {
        prompt: "A switch port is orange right after a cable is plugged in, then turns green after a short wait.",
        choices: ["Normal STP listening/learning", "DHCP server failure", "Wrong DNS suffix", "Bad subnet mask"],
        answer: 0,
        why: "Spanning Tree can temporarily block while the port transitions.",
        reasoning: "Spanning Tree puts new ports through Listening (15s) and Learning (15s) states before Forwarding. Orange during this transition is expected — it is not a fault. If it stays orange, investigate STP topology."
      },
      {
        prompt: "Only one office cannot connect. All users in that room plug into the same small switch.",
        choices: ["Check that room's switch uplink", "Replace the Internet firewall", "Change every user's password", "Clear browser cache"],
        answer: 0,
        why: "A shared local failure points to the common device or uplink.",
        reasoning: "Scope is the key clue: one office, all users, one shared device. When every user on one switch fails, the common element is that switch or its uplink — not individual PCs."
      },
      {
        prompt: "A user has 169.254.12.9 and no default gateway. Other users are fine.",
        choices: ["Check DHCP or renew the lease", "Replace the website", "Change the monitor", "Disable DNS"],
        answer: 0,
        why: "APIPA indicates the client did not receive DHCP settings.",
        reasoning: "Since other users are fine, DHCP is running. This one client did not get a lease — check the cable, switch port, and run ipconfig /renew. If it still fails, check for a DHCP reservation conflict."
      }
        ]
      },
      {
        label: "Bank B",
        questions: [
      {
        prompt: "A desktop can ping the gateway but cannot ping 8.8.8.8. Other departments can use the Internet.",
        choices: ["Check routing/firewall beyond the gateway", "Replace the keyboard", "Ignore the gateway", "Change HTTP to HTTPS"],
        answer: 0,
        why: "The local path works, so investigate the next hop, route, or policy.",
        reasoning: "Gateway responds = local network is fine. Failure beyond the gateway, only for this department, suggests a routing policy or ACL blocking traffic from this subnet specifically."
      },
      {
        prompt: "A user can browse websites but cannot open a shared folder by server name. The server works by IP address.",
        choices: ["Name resolution issue", "Bad Ethernet cable", "Dead power supply", "Wrong screen resolution"],
        answer: 0,
        why: "Access by IP but not by name points to DNS or name resolution.",
        reasoning: "The data path is fine — IP access works. The failure is purely in translating the server name to an IP. Check DNS records, the local hosts file, or whether the machine is looking at the right DNS server."
      },
      {
        prompt: "Everyone on VLAN 20 can print. Everyone on VLAN 30 cannot print to the same printer.",
        choices: ["Check inter-VLAN routing or ACLs", "Replace the printer toner", "Restart every laptop", "Change HTTPS port"],
        answer: 0,
        why: "A VLAN-specific failure points to routing, ACL, or subnet policy.",
        reasoning: "Same printer, different result by VLAN. The packet is crossing a VLAN boundary. Check whether inter-VLAN routing is enabled and whether an ACL is blocking traffic from VLAN 30."
      },
      {
        prompt: "A switch shows a port as administratively down.",
        choices: ["Enable the port with no shutdown", "Replace DNS", "Renew DHCP on the server", "Change the subnet mask first"],
        answer: 0,
        why: "Administratively down means the port was manually disabled.",
        reasoning: "Administratively down is a deliberate software state — someone ran shutdown on that interface in config mode. The physical cable and hardware are fine. Fix it with no shutdown."
      },
      {
        prompt: "A user reports intermittent drops only when moving the laptop around.",
        choices: ["Inspect cable or Wi-Fi signal quality", "Change the website URL", "Disable the default gateway", "Clear ARP on every router"],
        answer: 0,
        why: "Movement-related drops point to physical connection or wireless signal.",
        reasoning: "Movement triggering the drops is the key clue. It points to a bent or loose cable, a damaged connector, or a weak Wi-Fi signal that drops when the laptop shifts position."
      }
        ]
      }
    ]
  },
  {
    id: "matching",
    time: "Bonus / flex",
    title: "Command Matching",
    type: "matching",
    intro: "Match each command to the job it performs, then check the answers.",
    instructor: "Have students make a selection for every row before checking the key.",
    sets: [
      {
        commands: [
          { command: "Ping", answer: "C", prompt: "Are you there, Server?" },
          { command: "Tracert", answer: "A", prompt: "Show me the path to Google" },
          { command: "Ipconfig", answer: "B", prompt: "Am I connected to the wall?" },
          { command: "Nslookup", answer: "D", prompt: "Can this name turn into an IP address?" },
          { command: "Ipconfig /all", answer: "E", prompt: "Show me detailed network settings, including MAC and DNS" }
        ],
        options: [
          ["A", "Show me the path to Google"],
          ["B", "Am I connected to the wall?"],
          ["C", "Are you there, Server?"],
          ["D", "Can this name turn into an IP address?"],
          ["E", "Show me detailed network settings, including MAC and DNS"]
        ]
      },
      {
        commands: [
          { command: "DHCP", answer: "B", prompt: "Automatically hands out IP settings" },
          { command: "DNS", answer: "D", prompt: "Turns names into IP addresses" },
          { command: "ARP", answer: "A", prompt: "Finds a MAC address for a local IP" },
          { command: "SSH", answer: "E", prompt: "Secure remote command-line access" },
          { command: "HTTPS", answer: "C", prompt: "Secure web browsing" }
        ],
        options: [
          ["A", "Finds a MAC address for a local IP"],
          ["B", "Automatically hands out IP settings"],
          ["C", "Secure web browsing"],
          ["D", "Turns names into IP addresses"],
          ["E", "Secure remote command-line access"]
        ]
      },
      {
        commands: [
          { command: "Switch", answer: "D", prompt: "Forwards traffic by MAC address" },
          { command: "Router", answer: "B", prompt: "Connects different networks" },
          { command: "Default Gateway", answer: "E", prompt: "The exit from the local network" },
          { command: "Subnet Mask", answer: "A", prompt: "Identifies the network portion" },
          { command: "NIC", answer: "C", prompt: "The computer's network interface" }
        ],
        options: [
          ["A", "Identifies the network portion"],
          ["B", "Connects different networks"],
          ["C", "The computer's network interface"],
          ["D", "Forwards traffic by MAC address"],
          ["E", "The exit from the local network"]
        ]
      }
    ]
  },
  {
    id: "mistakes",
    time: "Review",
    title: "Top 5 Cert-Killer Mistakes",
    type: "mistakes",
    intro: "Use this as a fast reset before the final challenge.",
    instructor: "Ask students to give a real-world example for one mistake before moving to the mock challenge.",
    mistakes: [
      ["Forgetting the Gateway", "To leave your house, you need a door. To leave your network, you need a gateway."],
      ["Confusing Switch vs. Router", "Switches connect the same network. Routers connect different networks."],
      ["The APIPA Trap", "If you see 169.254, troubleshoot DHCP before troubleshooting the website."],
      ["Skipping Layer 1", "Many questions are solved by checking whether it is plugged in."],
      ["Mixing Up IP vs. MAC", "IPs are changeable home addresses. MACs stay with the network device."]
    ]
  },
  {
    id: "final",
    time: "80-90 minutes",
    title: "Final Mock Challenge",
    type: "finalQuiz",
    intro: "Use this as a Google Form, chat list, or live browser challenge.",
    instructor: "Students answer in numbered chat format. Use the on-screen answer key after submissions.",
    questions: [
      ["Device for Layer 2?", "Switch"],
      ["Command to test delay/latency?", "Ping"],
      ["Protocol for assigning IPs?", "DHCP"],
      ["A group of computers on one switch acting like they are on separate ones?", "VLAN"],
      ["Which command reveals the MAC address?", "ipconfig /all"],
      ["The exit of a network?", "Default Gateway"],
      ["Is 255.255.255.0 an IP or a Mask?", "Mask"],
      ["What does a router use to route data?", "IP Address"],
      ["Standard port for HTTPS?", "443"],
      ["First step in troubleshooting?", "Identify the problem / check physical"],
      ["What does APIPA usually start with?", "169.254"],
      ["What protocol resolves hostnames to IP addresses?", "DNS"],
      ["What command shows each router hop?", "tracert"],
      ["What device connects different networks?", "Router"],
      ["What device forwards frames by MAC address?", "Switch"],
      ["What layer includes cables and ports?", "Layer 1"],
      ["What layer includes IP addressing?", "Layer 3"],
      ["What command tests the local loopback address?", "ping 127.0.0.1"],
      ["What is the standard HTTP port?", "80"],
      ["What setting lets a PC leave its local network?", "Default Gateway"],
      ["What does DHCP assign?", "IP settings"],
      ["What does DNS resolve?", "Names to IP addresses"],
      ["What does VLAN stand for?", "Virtual Local Area Network"],
      ["What does NIC stand for?", "Network Interface Card"],
      ["Which command can show active network connections?", "netstat"],
      ["What is a subnet mask used for?", "Identifying the network portion of an IP address"],
      ["What should you check first when link status is disconnected?", "Physical cable / Layer 1"],
      ["What address is used for loopback?", "127.0.0.1"],
      ["What does a solid amber switch light often indicate?", "Temporary STP blocking or port state"],
      ["What command renews a DHCP lease on Windows?", "ipconfig /renew"],
      ["What command releases a DHCP lease on Windows?", "ipconfig /release"],
      ["What kind of address does a switch learn?", "MAC address"],
      ["What kind of address does a router use for routing?", "IP address"],
      ["What command checks DNS from the terminal?", "nslookup"],
      ["What port does DNS usually use?", "53"],
      ["What port does SSH usually use?", "22"],
      ["What does ACL stand for?", "Access Control List"],
      ["What does STP help prevent?", "Switching loops"],
      ["What command shows the route table on Windows?", "route print"],
      ["What does TTL stand for?", "Time To Live"],
      ["What does LAN stand for?", "Local Area Network"],
      ["What does WAN stand for?", "Wide Area Network"],
      ["Which tool tests a cable physically?", "Cable tester"],
      ["What is another name for a MAC address?", "Physical address"],
      ["What does SSID name?", "A wireless network"],
      ["Which protocol secures web traffic?", "HTTPS"],
      ["Which command continuously pings on Windows?", "ping -t"],
      ["What does PoE provide over Ethernet?", "Power"],
      ["What does NAT translate?", "Private and public IP addresses"],
      ["What device filters traffic by rule?", "Firewall"]
    ]
  },
  {
    id: "ports",
    time: "Cert Prep",
    title: "Port Numbers Drill",
    type: "rapidQuiz",
    intro: "Multiple-choice port number questions. Knowing ports cold is mandatory for Network+.",
    instructor: "Port memorization is heavily tested on CompTIA Network+. Run Bank A first, then Bank B for a second pass.",
    banks: [
      {
        label: "Bank A",
        questions: [
          { q: "Which port does SSH (Secure Shell) use?", choices: ["21", "22", "23", "25"], answer: 1, why: "Port 22 is SSH — encrypted remote login. Port 21 is FTP, 23 is Telnet (unencrypted), 25 is SMTP.", reasoning: "SSH replaced Telnet for secure remote management. 22 = Secure Shell, 23 = Telnet (one less secure, one number above)." },
          { q: "Which port does Telnet use?", choices: ["22", "23", "25", "80"], answer: 1, why: "Port 23 is Telnet — unencrypted remote login that sends credentials in plaintext, which is why SSH replaced it.", reasoning: "Telnet = 23, SSH = 22. On the exam, Telnet is always the wrong answer when security is mentioned." },
          { q: "SMTP (sending email between servers) uses which port?", choices: ["25", "110", "143", "443"], answer: 0, why: "Port 25 is SMTP — Simple Mail Transfer Protocol, used to send email between mail servers.", reasoning: "SMTP = 25 (Sending). POP3 = 110 (Pulling inbox). IMAP = 143 (Interactive inbox). Grouping by function helps." },
          { q: "DNS resolves hostnames to IPs. Which port does it use?", choices: ["52", "53", "54", "55"], answer: 1, why: "Port 53 is DNS. Both UDP (queries) and TCP (zone transfers) use port 53.", reasoning: "DNS = 53. DNS has 3 letters, port is 5+3. Just memorize it — it's on every exam." },
          { q: "Which port does HTTP (unencrypted web traffic) use?", choices: ["80", "8080", "443", "8443"], answer: 0, why: "Port 80 is HTTP. Data is not encrypted. Port 443 is HTTPS (encrypted).", reasoning: "80 = HTTP (open/unsecured), 443 = HTTPS (encrypted). If TLS or SSL is mentioned, the answer is 443." },
          { q: "HTTPS uses which port?", choices: ["80", "443", "8080", "4443"], answer: 1, why: "Port 443 is HTTPS — HTTP over TLS/SSL encryption. All modern secure web traffic uses it.", reasoning: "443 is always the secure web port. 80 is plain HTTP. Both are tested on the cert exam." },
          { q: "POP3 (downloading email to client) uses which port?", choices: ["25", "53", "110", "143"], answer: 2, why: "Port 110 is POP3 — Post Office Protocol v3. Downloads email and (by default) removes it from the server.", reasoning: "POP3 = 110. Think PO Box — you pick up mail and it's gone. IMAP = 143 keeps mail on the server." },
          { q: "IMAP (syncing email across devices) uses which port?", choices: ["25", "110", "143", "993"], answer: 2, why: "Port 143 is IMAP — Internet Message Access Protocol. It syncs email and keeps it on the server.", reasoning: "IMAP = 143. Newer and smarter than POP3 (110). 143 > 110 just like IMAP > POP3 in capability." }
        ]
      },
      {
        label: "Bank B",
        questions: [
          { q: "RDP (Remote Desktop Protocol) uses which port?", choices: ["22", "3306", "3389", "5900"], answer: 2, why: "Port 3389 is RDP — Windows Remote Desktop. It provides GUI remote access to Windows machines.", reasoning: "3389 = RDP. Common attack target on exposed Windows servers. VNC uses 5900, SSH uses 22." },
          { q: "SNMP (network device monitoring) uses which port?", choices: ["69", "161", "162", "514"], answer: 1, why: "Port 161 is SNMP (UDP) — Simple Network Management Protocol for polling device stats like CPU and bandwidth.", reasoning: "SNMP = 161 (queries) / 162 (traps). SNMP traps are alerts sent TO the manager. 161 is the polling port." },
          { q: "LDAP (directory services, like Active Directory) uses which port?", choices: ["389", "443", "636", "3268"], answer: 0, why: "Port 389 is LDAP — Lightweight Directory Access Protocol used to query AD and directory services.", reasoning: "LDAP = 389 (unencrypted). LDAPS (secure LDAP) = 636. For Network+, 389 is the standard exam answer." },
          { q: "SMB (Windows file sharing) uses which port?", choices: ["137", "139", "445", "546"], answer: 2, why: "Port 445 is SMB — Server Message Block, used for Windows file and printer sharing over TCP.", reasoning: "SMB = 445 (modern). 139 = NetBIOS over TCP (legacy SMB). For Network+, 445 is the right answer." },
          { q: "FTP (unencrypted file transfer) uses which two ports?", choices: ["20 and 21", "21 and 22", "69 and 70", "21 and 23"], answer: 0, why: "FTP uses port 21 for control (commands) and port 20 for data transfer. SFTP (SSH-based) uses port 22.", reasoning: "FTP = 20 (data) / 21 (control). FTPS uses 990/989. SFTP uses 22. Know all three for the exam." },
          { q: "DHCP uses which two UDP ports?", choices: ["66 and 67", "67 and 68", "68 and 69", "53 and 67"], answer: 1, why: "DHCP uses UDP port 67 (server listens) and port 68 (client listens). Clients broadcast to discover servers.", reasoning: "DHCP = 67 (server) and 68 (client). Server has the lower number here. Both are UDP — connectionless." },
          { q: "TFTP (Trivial File Transfer, no authentication) uses which port?", choices: ["21", "22", "69", "443"], answer: 2, why: "Port 69 is TFTP — a simplified, unauthenticated UDP protocol used to load router configs or PXE boot devices.", reasoning: "TFTP = 69. No authentication, UDP only. Used in network booting and uploading IOS firmware to routers." },
          { q: "NTP (Network Time Protocol) uses which port?", choices: ["119", "123", "161", "514"], answer: 1, why: "Port 123 is NTP — synchronizes clocks across devices. Accurate time is critical for logs and certificates.", reasoning: "NTP = 123. Without time sync, SSL/TLS certificates may reject and security logs become unreliable." }
        ]
      }
    ]
  },
  {
    id: "subnetting",
    time: "Cert Prep",
    title: "Subnetting Practice",
    type: "rapidQuiz",
    intro: "CIDR and subnet mask questions. These appear on every Network+ exam.",
    instructor: "Subnetting is worth drilling repeatedly. Bank A covers host counts; Bank B covers addresses and notation.",
    banks: [
      {
        label: "Bank A — Host Counts",
        questions: [
          { q: "How many usable host addresses does a /24 subnet provide?", choices: ["254", "255", "256", "512"], answer: 0, why: "A /24 has 256 total addresses (2^8). Subtract 2 (network + broadcast) = 254 usable hosts.", reasoning: "Formula: 2^(32-prefix) - 2. For /24: 2^8 - 2 = 254. The -2 accounts for network ID and broadcast address." },
          { q: "How many usable hosts are in a /25 subnet?", choices: ["62", "126", "128", "254"], answer: 1, why: "A /25 has 128 total addresses (2^7). Subtract 2 = 126 usable hosts.", reasoning: "Each bit added to the prefix halves the host count. /24=254, /25=126, /26=62, /27=30…" },
          { q: "How many usable hosts are in a /26 subnet?", choices: ["30", "62", "64", "126"], answer: 1, why: "A /26 has 64 total addresses (2^6). Subtract 2 = 62 usable hosts.", reasoning: "/26 = 64 total, 62 usable. /25 doubles that. Memorize the chain: 30, 62, 126, 254." },
          { q: "How many usable hosts are in a /27 subnet?", choices: ["14", "30", "32", "62"], answer: 1, why: "A /27 has 32 total addresses (2^5). Subtract 2 = 30 usable hosts.", reasoning: "Chain: /30=2, /29=6, /28=14, /27=30, /26=62, /25=126, /24=254. Each step doubles +2." },
          { q: "How many usable hosts are in a /28 subnet?", choices: ["12", "14", "16", "30"], answer: 1, why: "A /28 has 16 total addresses (2^4). Subtract 2 = 14 usable hosts.", reasoning: "/28 = 16 total, 14 usable. Common for small office subnets or VLAN segments." },
          { q: "How many usable hosts are in a /29 subnet?", choices: ["4", "6", "8", "14"], answer: 1, why: "A /29 has 8 total addresses (2^3). Subtract 2 = 6 usable hosts. Common for router point-to-point links.", reasoning: "/29 = 8 total, 6 usable. /30 has only 2 usable — the classic point-to-point WAN link size." },
          { q: "How many usable hosts does a /30 subnet provide?", choices: ["2", "4", "6", "8"], answer: 0, why: "A /30 has 4 total addresses (2^2). Subtract 2 = 2 usable hosts. Classic point-to-point WAN link size.", reasoning: "/30 = 2 hosts only. Perfect for connecting two routers. Any larger subnet wastes addresses there." },
          { q: "What subnet mask corresponds to /24?", choices: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.128"], answer: 2, why: "A /24 mask has 24 ones: 11111111.11111111.11111111.00000000 = 255.255.255.0", reasoning: "Count the 1-bits in the mask. 255=8 ones. Three 255s = 24 ones = /24. A /16 is 255.255.0.0." }
        ]
      },
      {
        label: "Bank B — Addresses & Notation",
        questions: [
          { q: "For subnet 192.168.1.0/24, what is the broadcast address?", choices: ["192.168.1.0", "192.168.1.1", "192.168.1.254", "192.168.1.255"], answer: 3, why: "Broadcast is always the last address in the subnet. For /24 starting at .0, the last address is .255.", reasoning: "Network address = first (all host bits zero). Broadcast = last (all host bits one). For /24: .0 to .255." },
          { q: "A host has IP 10.0.0.50 with mask 255.255.255.0. What is its network address?", choices: ["10.0.0.0", "10.0.0.1", "10.0.0.50", "10.0.0.255"], answer: 0, why: "AND the IP with the mask: 10.0.0.50 AND 255.255.255.0 = 10.0.0.0. Host bits are zeroed.", reasoning: "Network address = IP AND mask. With /24 mask, last octet becomes 0. Host bits are cleared." },
          { q: "IP 172.16.5.200/25 — which subnet is this host in?", choices: ["172.16.5.0/25", "172.16.5.128/25", "172.16.5.192/26", "172.16.5.0/24"], answer: 1, why: "A /25 splits the last octet at 128. .200 falls in the second subnet: 172.16.5.128/25.", reasoning: "Block size for /25 = 128. Subnets: .0–.127 (first) and .128–.255 (second). .200 is in the second block." },
          { q: "How many /26 subnets can you carve from a single /24?", choices: ["2", "4", "6", "8"], answer: 1, why: "Going from /24 to /26 borrows 2 bits. 2^2 = 4 subnets. Each /26 has 64 addresses.", reasoning: "Subnets = 2^(new prefix - old prefix). /26 - /24 = 2 borrowed bits → 2^2 = 4 subnets." },
          { q: "What private IP range does 10.0.0.0/8 cover?", choices: ["10.0.0.0 – 10.255.255.255", "10.0.0.0 – 10.0.255.255", "10.0.0.0 – 10.255.0.0", "10.0.0.0 – 10.0.0.255"], answer: 0, why: "A /8 leaves 24 bits for hosts. 10.0.0.0 to 10.255.255.255 is 16,777,216 addresses.", reasoning: "Three private ranges: 10/8 (Class A), 172.16-31/12 (Class B), 192.168/16 (Class C). Memorize all three." },
          { q: "Which address range is reserved for APIPA?", choices: ["10.0.0.0/8", "169.254.0.0/16", "172.16.0.0/12", "192.168.0.0/16"], answer: 1, why: "APIPA uses 169.254.0.0/16. A device self-assigns this address when DHCP fails.", reasoning: "If you see 169.254.x.x, DHCP failed. The device self-assigned. Check cable, DHCP server, and NIC config." },
          { q: "You need a subnet for exactly 50 hosts. What is the smallest prefix that works?", choices: ["/25 — 126 hosts", "/26 — 62 hosts", "/27 — 30 hosts", "/28 — 14 hosts"], answer: 1, why: "50 hosts need at least 52 address slots (50 + network + broadcast). /26 gives 62 usable. /27 only gives 30.", reasoning: "Pick the smallest subnet where usable hosts ≥ required. 50 > 30 (/27 fails), 50 ≤ 62 (/26 works)." },
          { q: "What does CIDR stand for?", choices: ["Classless Inter-Domain Routing", "Classful IP Distribution Routing", "Common Internet Data Range", "Classless IP Data Routing"], answer: 0, why: "CIDR = Classless Inter-Domain Routing. It replaced fixed class-based addressing with flexible prefix lengths.", reasoning: "CIDR replaced Class A/B/C fixed boundaries. The slash notation (/24, /26) is CIDR notation. Key cert term." }
        ]
      }
    ]
  },
  {
    id: "osi",
    time: "Cert Prep",
    title: "OSI Layer Mapping",
    type: "rapidQuiz",
    intro: "Map protocols, devices, and concepts to the correct OSI layer. A classic CompTIA exam format.",
    instructor: "OSI is heavily tested on Network+. Bank A covers devices and protocols; Bank B focuses on troubleshooting by layer.",
    banks: [
      {
        label: "Bank A — Protocols & Devices",
        questions: [
          { q: "At which OSI layer does IP addressing operate?", choices: ["Layer 1 – Physical", "Layer 2 – Data Link", "Layer 3 – Network", "Layer 4 – Transport"], answer: 2, why: "IP addressing is a Layer 3 (Network) function. Routers use IP addresses to route packets between networks.", reasoning: "OSI 1-7: Physical, Data Link, Network, Transport, Session, Presentation, Application. IP = Layer 3." },
          { q: "Which OSI layer does a switch primarily operate at?", choices: ["Layer 1", "Layer 2", "Layer 3", "Layer 4"], answer: 1, why: "Switches operate at Layer 2 (Data Link) and forward frames using MAC addresses. Layer 3 switches can also route.", reasoning: "Switch = Layer 2 (MAC). Router = Layer 3 (IP). Hub = Layer 1 (dumb repeater, no addressing)." },
          { q: "HTTP and HTTPS operate at which OSI layer?", choices: ["Layer 4 – Transport", "Layer 5 – Session", "Layer 6 – Presentation", "Layer 7 – Application"], answer: 3, why: "HTTP and HTTPS are Application layer (Layer 7) protocols. They define how web browsers and servers communicate.", reasoning: "Layer 7 = what users interact with: HTTP, DNS, SMTP, FTP. Layer 4 = TCP/UDP. Never confuse them." },
          { q: "TCP and UDP operate at which OSI layer?", choices: ["Layer 2", "Layer 3", "Layer 4", "Layer 5"], answer: 2, why: "TCP and UDP are Transport layer (Layer 4) protocols. They handle end-to-end delivery, ports, and flow control.", reasoning: "Layer 4 = Transport = TCP (reliable) and UDP (fast, no guarantees). Port numbers live at Layer 4." },
          { q: "A hub operates at which OSI layer?", choices: ["Layer 1", "Layer 2", "Layer 3", "Layer 4"], answer: 0, why: "A hub operates at Layer 1 (Physical). It repeats electrical signals to all ports with no intelligence or addressing.", reasoning: "Hub = Layer 1 (dumb repeater). Switch = Layer 2 (MAC-aware). Router = Layer 3 (IP-aware)." },
          { q: "Which layer is responsible for MAC addresses and Ethernet framing?", choices: ["Layer 1 – Physical", "Layer 2 – Data Link", "Layer 3 – Network", "Layer 4 – Transport"], answer: 1, why: "Layer 2 (Data Link) defines MAC addressing, Ethernet framing, and local delivery between devices on the same network.", reasoning: "Data Link (2) = MAC + frames. Network (3) = IP + packets. Physical (1) = bits + cables." },
          { q: "DNS operates at which OSI layer?", choices: ["Layer 3", "Layer 4", "Layer 6", "Layer 7"], answer: 3, why: "DNS is an Application layer (Layer 7) protocol. It resolves hostnames to IP addresses using UDP port 53.", reasoning: "DNS = Layer 7. Even though it helps Layer 3 routing, DNS itself is an application-layer service." },
          { q: "Which OSI layer handles encryption and data format translation (e.g., TLS, JPEG, ASCII)?", choices: ["Layer 4 – Transport", "Layer 5 – Session", "Layer 6 – Presentation", "Layer 7 – Application"], answer: 2, why: "Layer 6 (Presentation) handles encryption, encoding, and format conversion. TLS encryption lives here.", reasoning: "Presentation (6) = format + encryption. Session (5) = managing connections (setup/teardown/dialog)." }
        ]
      },
      {
        label: "Bank B — Troubleshooting by Layer",
        questions: [
          { q: "A cable is unplugged. Which OSI layer does this problem exist at?", choices: ["Layer 1 – Physical", "Layer 2 – Data Link", "Layer 3 – Network", "Layer 4 – Transport"], answer: 0, why: "Unplugged cables, broken ports, and no link lights are Layer 1 (Physical) problems. Always check hardware first.", reasoning: "OSI troubleshooting = bottom-up. Start at Layer 1 (physical) before blaming software or configuration." },
          { q: "A PC can ping by IP but cannot browse by hostname. Which layer is likely at fault?", choices: ["Layer 1 – Physical", "Layer 3 – Network", "Layer 4 – Transport", "Layer 7 – Application"], answer: 3, why: "IP works (Layer 3 is fine), but name resolution fails — that's a DNS issue at Layer 7 (Application).", reasoning: "If IP ping works, Layers 1-3 are fine. Name resolution = DNS = Layer 7. Check DNS server settings." },
          { q: "Two PCs on the same switch cannot communicate. Switch config is correct. What layer should you check first?", choices: ["Layer 1 – Physical", "Layer 2 – Data Link", "Layer 3 – Network", "Layer 7 – Application"], answer: 0, why: "If config is correct, start at the bottom. Check cables, link lights, and NIC status — all Layer 1 issues.", reasoning: "Bottom-up troubleshooting: always rule out Layer 1 first. A cable issue is always possible even with correct config." },
          { q: "A firewall filters traffic by port number. Which OSI layer is it inspecting?", choices: ["Layer 2", "Layer 3", "Layer 4", "Layer 7"], answer: 2, why: "Port numbers are a Layer 4 (Transport) concept. A firewall filtering by port is doing Layer 4 packet inspection.", reasoning: "Port numbers = Layer 4. IP address filtering = Layer 3. Content filtering (URL/app) = Layer 7 (NGFW)." },
          { q: "VLAN membership is misconfigured, isolating two hosts on the same switch. Which layer is the fault?", choices: ["Layer 1", "Layer 2", "Layer 3", "Layer 4"], answer: 1, why: "VLANs are a Layer 2 (Data Link) concept. Incorrect VLAN membership prevents frames from reaching other hosts.", reasoning: "VLAN = Layer 2. A misconfigured VLAN port isolates hosts even if cabling and IP config are perfect." },
          { q: "A router drops packets to 10.0.0.0/24 because no route exists. Which layer failed?", choices: ["Layer 1", "Layer 2", "Layer 3", "Layer 4"], answer: 2, why: "Routing decisions use IP addresses at Layer 3 (Network). A missing route is a Layer 3 configuration problem.", reasoning: "Missing route = Layer 3. Check the routing table with 'route print' (Windows) or 'show ip route' (Cisco)." },
          { q: "A TCP session keeps resetting before a file transfer completes. Which layer is involved?", choices: ["Layer 2", "Layer 3", "Layer 4", "Layer 7"], answer: 2, why: "TCP is a Layer 4 (Transport) protocol. Session resets, dropped connections, and retransmissions are Layer 4 symptoms.", reasoning: "TCP RST flag = Layer 4. Could be firewall, NAT issue, or MTU mismatch. Use netstat or Wireshark to investigate." },
          { q: "An app fails to authenticate to LDAP. IP and DNS both work. Which layer is suspect?", choices: ["Layer 3", "Layer 4", "Layer 6", "Layer 7"], answer: 3, why: "LDAP is an Application layer (Layer 7) protocol. Auth failures when IP/DNS are fine point to Layer 7.", reasoning: "When lower layers work but the application fails, suspect Layer 7. LDAP, HTTP 401, SMTP auth errors = Layer 7." }
        ]
      }
    ]
  },
  {
    id: "simulation",
    time: "Full Exam",
    title: "CompTIA Simulation",
    type: "simulation",
    intro: "90 questions, 90 minutes. Single sitting, forward-only, no hints. Scaled score at the end.",
    instructor: "Use this as a timed practice exam before certification day. Score is displayed as /900 (720 = passing)."
  },
  {
    id: "pbq-cli",
    time: "PBQ Lab",
    title: "PBQ: CLI Diagnostics",
    type: "pbqCli",
    intro: "Performance-Based Question: use the terminal to run commands, then diagnose the network problem.",
    instructor: "CompTIA puts PBQs at the start of the real exam. Students explore freely then submit a diagnosis.",
    banks: [
      {
        label: "Scenario 1",
        scenario: "A user calls the help desk: 'I can't access the internet or any shared drives. My computer says it's connected.' Investigate using the terminal below.",
        hint: "Try: ipconfig, ping 127.0.0.1, ping 8.8.8.8, ping 192.168.1.1, nslookup google.com",
        commands: {
          "ipconfig": "Windows IP Configuration\n\nEthernet adapter Local Area Connection:\n   Connection-specific DNS Suffix: corp.local\n   IPv4 Address. . . . . . . . . : 169.254.45.12\n   Subnet Mask . . . . . . . . . : 255.255.0.0\n   Default Gateway . . . . . . . : (blank)",
          "ipconfig /all": "Windows IP Configuration\n\n   Host Name . . . . . . . . . . : DESKTOP-USER01\n   Primary Dns Suffix  . . . . . : corp.local\n   DHCP Enabled. . . . . . . . . : Yes\n   Autoconfiguration Enabled . . : Yes\n\nEthernet adapter Local Area Connection:\n   DHCP Server . . . . . . . . . : (unreachable)\n   IPv4 Address. . . . . . . . . : 169.254.45.12\n   Subnet Mask . . . . . . . . . : 255.255.0.0\n   Default Gateway . . . . . . . : (blank)",
          "ping 127.0.0.1": "Pinging 127.0.0.1 with 32 bytes of data:\nReply from 127.0.0.1: bytes=32 time<1ms TTL=128\nReply from 127.0.0.1: bytes=32 time<1ms TTL=128\n\nPing statistics for 127.0.0.1:\n    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)",
          "ping 8.8.8.8": "Pinging 8.8.8.8 with 32 bytes of data:\nRequest timed out.\nRequest timed out.\n\nPing statistics for 8.8.8.8:\n    Packets: Sent = 4, Received = 0, Lost = 4 (100% loss)",
          "ping 192.168.1.1": "Pinging 192.168.1.1 with 32 bytes of data:\nRequest timed out.\nRequest timed out.\n\nPing statistics for 192.168.1.1:\n    Packets: Sent = 4, Received = 0, Lost = 4 (100% loss)",
          "nslookup google.com": "DNS request timed out.\n    timeout was 2 seconds.\nServer:  Unknown\nAddress:  Unknown\n\nDNS request timed out.\n    timeout was 2 seconds.\n*** Request to UnKnown timed-out",
          "nslookup": "DNS request timed out.\n    timeout was 2 seconds.\nServer:  Unknown\nAddress:  Unknown",
          "netstat": "Active Connections\n\n  Proto  Local Address       Foreign Address     State\n  TCP    127.0.0.1:49152     127.0.0.1:49153     ESTABLISHED\n\n(No external connections — DHCP likely not obtained)"
        },
        choices: [
          "The DNS server is misconfigured — the PC has an IP but can't resolve names",
          "The DHCP server is unreachable — the PC self-assigned an APIPA address",
          "The network cable is unplugged — the PC has no physical link",
          "The default gateway IP is wrong — the PC can't route to other subnets"
        ],
        answer: 1,
        why: "The 169.254.x.x APIPA address confirms the PC never received a DHCP lease. The loopback ping succeeds (TCP/IP stack is healthy), but all external pings fail. The DHCP server is down, unreachable, or the switch port is misconfigured."
      },
      {
        label: "Scenario 2",
        scenario: "A developer reports: 'I can load some websites but not others. I can ping servers by IP just fine, but URLs often fail or are slow.' Investigate using the terminal below.",
        hint: "Try: ipconfig, ping 8.8.8.8, nslookup google.com, nslookup github.com, tracert 8.8.8.8",
        commands: {
          "ipconfig": "Windows IP Configuration\n\nEthernet adapter Ethernet:\n   IPv4 Address. . . . . . . . . : 192.168.1.55\n   Subnet Mask . . . . . . . . . : 255.255.255.0\n   Default Gateway . . . . . . . : 192.168.1.1",
          "ipconfig /all": "Windows IP Configuration\n\n   DHCP Enabled. . . . . . . . . : Yes\n   IPv4 Address. . . . . . . . . : 192.168.1.55\n   Subnet Mask . . . . . . . . . : 255.255.255.0\n   Default Gateway . . . . . . . : 192.168.1.1\n   DNS Servers . . . . . . . . . : 192.168.1.200\n                                   (secondary blank)",
          "ping 8.8.8.8": "Pinging 8.8.8.8 with 32 bytes of data:\nReply from 8.8.8.8: bytes=32 time=14ms TTL=119\nReply from 8.8.8.8: bytes=32 time=13ms TTL=119\n\nPing statistics: Sent = 4, Received = 4, Lost = 0 (0% loss)",
          "ping 192.168.1.1": "Pinging 192.168.1.1 with 32 bytes of data:\nReply from 192.168.1.1: bytes=32 time<1ms TTL=64\n\nPing statistics: Sent = 4, Received = 4, Lost = 0 (0% loss)",
          "nslookup google.com": "Server:  UnKnown\nAddress:  192.168.1.200\n\n*** 192.168.1.200 can't find google.com: Server failed",
          "nslookup github.com": "Server:  UnKnown\nAddress:  192.168.1.200\n\n*** 192.168.1.200 can't find github.com: Server failed",
          "nslookup google.com 8.8.8.8": "Server:  dns.google\nAddress:  8.8.8.8\n\nNon-authoritative answer:\nName:    google.com\nAddresses: 142.250.80.46",
          "tracert 8.8.8.8": "Tracing route to dns.google [8.8.8.8]:\n  1    <1ms   192.168.1.1\n  2    12ms   10.0.0.1\n  3    13ms   8.8.8.8\nTrace complete.",
          "ping google.com": "Ping request could not find host google.com. Please check the name and try again."
        },
        choices: [
          "The default gateway is down — the PC cannot route to external networks",
          "The internal DNS server (192.168.1.200) is failing — name resolution is broken",
          "The PC has an APIPA address — DHCP did not assign a valid IP",
          "A firewall is blocking all outbound traffic on port 80 and 443"
        ],
        answer: 1,
        why: "IP connectivity works (pinging 8.8.8.8 by address succeeds, gateway responds). The internal DNS server 192.168.1.200 returns 'Server failed' for both queries. Using Google DNS (8.8.8.8) directly resolves correctly — confirming the internal DNS server is the problem."
      }
    ]
  },
  {
    id: "pbq-topology",
    time: "PBQ Lab",
    title: "PBQ: Network Topology",
    type: "pbqTopology",
    intro: "Performance-Based Question: read the scenario and click the device most likely causing the problem.",
    instructor: "Topology PBQs test whether students can map symptoms to the correct OSI layer and device.",
    banks: [
      {
        label: "Scenario 1",
        scenario: "A user can communicate with all other PCs on the same floor but cannot reach any server in the data center or browse the internet. Pinging other local PCs succeeds. Pinging the data center servers and 8.8.8.8 both fail.",
        topology: [
          { id: "pc", label: "PC", icon: "💻", desc: "User's workstation — has a valid IP and can ping local peers" },
          { id: "switch", label: "Floor Switch", icon: "🔀", desc: "Layer 2 switch — all local PCs are connected here" },
          { id: "router", label: "Router / Core", icon: "🌐", desc: "Layer 3 device — handles routing between subnets and internet access" },
          { id: "server", label: "Data Center", icon: "🏢", desc: "Remote servers — cannot be reached from the floor" }
        ],
        answer: "router",
        why: "Local PC-to-PC communication works, meaning Layer 1 (cable) and Layer 2 (switch) are functioning. The failure starts when traffic needs to leave the local subnet — exactly what a router does. A misconfigured or down router/gateway is the most likely cause."
      },
      {
        label: "Scenario 2",
        scenario: "Two PCs on the same switch, same VLAN, same subnet cannot communicate with each other. No other PCs have problems. Both PCs have valid IPs, their NICs show link-up, and you can ping each PC's loopback (127.0.0.1) successfully.",
        topology: [
          { id: "pc1", label: "PC 1", icon: "💻", desc: "First PC — valid IP, loopback OK, link light on" },
          { id: "switch", label: "Switch", icon: "🔀", desc: "Layer 2 switch — all PCs connect here" },
          { id: "pc2", label: "PC 2", icon: "💻", desc: "Second PC — valid IP, loopback OK, link light on" },
          { id: "router", label: "Router", icon: "🌐", desc: "Handles routing to other subnets and internet" }
        ],
        answer: "switch",
        why: "Both PCs have working NICs and valid addresses (Layer 1 and 3 appear OK). The problem is specifically between two devices on the same switch and VLAN. STP port state, VLAN misconfiguration, or a bad switch port are Layer 2 problems — the switch is suspect."
      },
      {
        label: "Scenario 3",
        scenario: "A user can browse HTTP sites (port 80) but HTTPS sites (port 443) all time out. Pinging external IP addresses works. The router and switch show no errors. All other users on the network have the same issue.",
        topology: [
          { id: "pc", label: "PC", icon: "💻", desc: "User's workstation — HTTP works, HTTPS fails" },
          { id: "switch", label: "Switch", icon: "🔀", desc: "Layer 2 switch — no errors reported" },
          { id: "firewall", label: "Firewall", icon: "🛡️", desc: "Inspects and filters traffic by port and rule" },
          { id: "router", label: "Router", icon: "🌐", desc: "Routes traffic — external IP pings succeed" }
        ],
        answer: "firewall",
        why: "IP connectivity works and HTTP (port 80) passes — so Layers 1-3 and the router are fine. HTTPS uses port 443, and the problem affects all users. A firewall rule blocking port 443 outbound would explain this precisely. The firewall is the correct answer."
      }
    ]
  },
  {
    id: "pbq-config",
    time: "PBQ Lab",
    title: "PBQ: IP Configuration",
    type: "pbqConfig",
    intro: "Performance-Based Question: read the scenario and fill in the correct network settings.",
    instructor: "Config PBQs test applied subnetting knowledge. Students must calculate correct values, not just recognize them.",
    banks: [
      {
        label: "Scenario 1",
        scenario: "Configure a PC for the network 192.168.10.0/24. Assign it the FIRST usable host address. Use the LAST usable host as the gateway. Use Google's primary DNS server.",
        fields: [
          { id: "ip", label: "IP Address", answer: "192.168.10.1", hint: "First usable host in 192.168.10.0/24" },
          { id: "mask", label: "Subnet Mask", answer: "255.255.255.0", hint: "The mask for /24" },
          { id: "gateway", label: "Default Gateway", answer: "192.168.10.254", hint: "Last usable host in 192.168.10.0/24" },
          { id: "dns", label: "DNS Server", answer: "8.8.8.8", hint: "Google's primary public DNS" }
        ],
        why: "192.168.10.0/24: network=.0, broadcast=.255, first usable=.1, last usable=.254. Google DNS=8.8.8.8."
      },
      {
        label: "Scenario 2",
        scenario: "Configure a PC in the SECOND /26 subnet carved from 192.168.5.0/24. Assign it the LAST usable host address in that subnet. The gateway is the first usable host of that same subnet. DNS is Cloudflare (1.1.1.1).",
        fields: [
          { id: "ip", label: "IP Address", answer: "192.168.5.126", hint: "/26 block size = 64. Second subnet: .64–.127. Last usable = .126" },
          { id: "mask", label: "Subnet Mask", answer: "255.255.255.192", hint: "The mask for /26 (64 addresses per subnet)" },
          { id: "gateway", label: "Default Gateway", answer: "192.168.5.65", hint: "First usable host in second /26 subnet (.64 is network)" },
          { id: "dns", label: "DNS Server", answer: "1.1.1.1", hint: "Cloudflare's primary public DNS" }
        ],
        why: "/24→/26 = 4 subnets of 64 addresses. Subnet 2: 192.168.5.64/26 (.64=network, .127=broadcast, .65=first usable, .126=last usable)."
      }
    ]
  },
  {
    id: "simulation",
    time: "Full Exam",
    title: "CompTIA Simulation",
    type: "simulation",
    intro: "90 questions, 90 minutes. Single sitting, forward-only, no hints. Scaled score at the end.",
    instructor: "Use this as a timed practice exam before certification day. Score is displayed as /900 (720 = passing)."
  },
  {
    id: "bookmarks",
    time: "Review later",
    title: "Bookmarked Review",
    type: "bookmarks",
    intro: "Review saved questions and scenarios from this browser.",
    instructor: "Bookmarks are stored locally in the student's browser so they can revisit tough items later."
  }
];

let currentSection = 0;
const letters = ["A", "B", "C", "D"];
let appMode = "study";
let timerSeconds = 0;
let timerId = null;
const bookmarkStorageKey = "jna-bootcamp-bookmarks";
const state = {
  warmup: { bankIndex: 0, index: 0, selected: null, revealed: false, order: [], position: 0, answers: {} },
  sprint: { bankIndex: 0, index: 0, selected: null, revealed: false, order: [], position: 0, answers: {} },
  command: { bankIndex: 0, index: 0, selected: null, revealed: false, order: [], position: 0, answers: {} },
  escape: { index: 0, complete: false, order: [], position: 0 },
  detective: { bankIndex: 0, index: 0, selected: null, revealed: false, order: [], position: 0, answers: {} },
  matching: { revealed: false, selections: {}, order: [], position: 0 },
  mistakes: { revealed: false },
  final: { revealed: false, page: 0, order: [] },
  ports: { bankIndex: 0, index: 0, selected: null, revealed: false, order: [], position: 0, answers: {} },
  subnetting: { bankIndex: 0, index: 0, selected: null, revealed: false, order: [], position: 0, answers: {} },
  osi: { bankIndex: 0, index: 0, selected: null, revealed: false, order: [], position: 0, answers: {} },
  simulation: { questions: null, position: 0, answers: {}, done: false, endTime: null },
  "pbq-cli": { bankIndex: 0, history: [], submitted: false, selected: null, revealed: false },
  "pbq-topology": { bankIndex: 0, selected: null, revealed: false },
  "pbq-config": { bankIndex: 0, values: {}, submitted: false, revealed: false }
};
let bookmarks = loadBookmarks();
let comptiaTimerId = null;
let simTimerId = null;
let missedQuizState = { active: false, position: 0, revealed: false };

function comptiaAdvance(local, bankLength, bookmarkItem, isWrong, bank, sectionTitle) {
  if (comptiaTimerId) { clearTimeout(comptiaTimerId); comptiaTimerId = null; }
  if (isWrong) addBookmark(bookmarkItem);
  const revealedCount = Object.values(local.answers).filter((a) => a.revealed).length;
  const allDone = revealedCount >= bankLength;
  if (allDone) {
    setTimeout(() => showComptiaBankReview(local, bank, sectionTitle), 1200);
    return;
  }
  comptiaTimerId = setTimeout(() => {
    comptiaTimerId = null;
    advanceRotation(local, bankLength);
    renderSection();
  }, 6000);
}

function showComptiaBankReview(local, bank, sectionTitle) {
  if (comptiaTimerId) { clearTimeout(comptiaTimerId); comptiaTimerId = null; }
  const answersArr = Object.values(local.answers).filter((a) => a.revealed);
  const correctCount = answersArr.filter((a) => a.correct).length;
  const total = answersArr.length;
  const pct = total ? Math.round((correctCount / total) * 100) : 0;
  const items = bank.questions || bank.items || [];
  const wrongItems = Object.entries(local.answers)
    .filter(([, a]) => a.revealed && !a.correct)
    .map(([idx]) => {
      const q = items[Number(idx)];
      if (!q) return null;
      const correctText = q.choices ? q.choices[q.answer] : q.answer;
      const prompt = q.prompt || q.q || "(question)";
      const why = q.why || "";
      return { prompt, correctText, why };
    }).filter(Boolean);

  content.innerHTML = "";
  const div = document.createElement("div");
  div.className = "activity-panel";
  div.innerHTML = `
    <div class="activity-body">
      <div class="prompt-card">
        <p class="eyebrow">${escapeHtml(sectionTitle)} · ${escapeHtml(bank.label)} Complete</p>
        <p class="large-prompt">Bank Review</p>
        <p class="lead">Score: <strong class="${pct >= 70 ? "score-correct" : "score-wrong"}">${correctCount}/${total} (${pct}%)</strong></p>
      </div>
      ${wrongItems.length ? `
        <div class="review-missed-list">
          <p class="eyebrow">${wrongItems.length} missed question${wrongItems.length !== 1 ? "s" : ""}:</p>
          ${wrongItems.map((item) => `
            <div class="review-missed-item">
              <p class="review-missed-prompt">${escapeHtml(item.prompt)}</p>
              <p class="review-missed-answer"><strong>Correct:</strong> ${escapeHtml(item.correctText)}</p>
              ${item.why ? `<p class="review-missed-why">${escapeHtml(item.why)}</p>` : ""}
            </div>
          `).join("")}
        </div>
      ` : `<p class="lead review-perfect">🎉 Perfect score! All ${total} questions correct.</p>`}
    </div>
    <div class="control-row"></div>
  `;
  content.appendChild(div);
  div.querySelector(".control-row").appendChild(makeButton("Continue to Next Section →", () => moveSection(1)));
}

function injectCountdownBar(body) {
  const existing = body.querySelector(".comptia-countdown");
  if (existing) existing.remove();
  const wrapper = document.createElement("div");
  wrapper.className = "comptia-countdown";
  wrapper.innerHTML = `<span class="comptia-countdown-label">Advancing in <strong class="comptia-countdown-secs">6</strong>s…</span><div class="comptia-bar"><div class="comptia-bar-fill"></div></div>`;
  body.appendChild(wrapper);
  const fill = wrapper.querySelector(".comptia-bar-fill");
  const secsEl = wrapper.querySelector(".comptia-countdown-secs");
  let remaining = 6;
  fill.style.width = "100%";
  const tick = setInterval(() => {
    remaining--;
    secsEl.textContent = remaining;
    fill.style.width = `${(remaining / 6) * 100}%`;
    if (remaining <= 0) clearInterval(tick);
  }, 1000);
}

function computeExamScore() {
  let answered = 0, correct = 0;
  Object.values(state).forEach((local) => {
    if (!local.answers) return;
    Object.values(local.answers).forEach((ans) => {
      if (ans.revealed) {
        answered++;
        if (ans.correct) correct++;
      }
    });
  });
  return { answered, correct };
}

function renderExamScore() {
  const el = document.getElementById("exam-score");
  if (!el) return;
  if (appMode === "study") {
    el.classList.add("hidden");
    return;
  }
  const { answered, correct } = computeExamScore();
  const wrong = answered - correct;
  const pct = answered > 0 ? Math.round((correct / answered) * 100) : null;
  el.classList.remove("hidden");
  if (appMode === "comptia") {
    el.innerHTML = `
      <span class="timer-label">CompTIA Mode</span>
      <p class="score-pct">${answered > 0 ? `${answered} answered` : "No answers submitted yet."}</p>
      <p class="score-pct" style="font-size:0.7rem;opacity:0.6">Score revealed at section end</p>
    `;
    return;
  }
  el.innerHTML = `
    <span class="timer-label">Exam Score</span>
    <div class="score-tally">
      <span class="score-correct">${correct} correct</span>
      ${answered > 0 ? `<span class="score-sep">·</span><span class="score-wrong">${wrong} wrong</span>` : ""}
    </div>
    <p class="score-pct">${answered > 0 ? `${answered} answered · ${pct}%` : "No answers submitted yet."}</p>
  `;
}

const nav = document.getElementById("section-nav");
const title = document.getElementById("section-title");
const sectionTime = document.getElementById("section-time");
const content = document.getElementById("section-content");
const timerDisplay = document.getElementById("session-time");

function init() {
  renderNav();
  renderSection();
  document.getElementById("prev-section").addEventListener("click", () => moveSection(-1));
  document.getElementById("next-section").addEventListener("click", () => moveSection(1));
  document.getElementById("study-mode").addEventListener("click", () => setAppMode("study"));
  document.getElementById("exam-mode").addEventListener("click", () => setAppMode("exam"));
  document.getElementById("comptia-mode").addEventListener("click", () => setAppMode("comptia"));
  document.getElementById("timer-toggle").addEventListener("click", toggleTimer);
  document.getElementById("timer-reset").addEventListener("click", resetTimer);

  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea, select")) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const section = sections[currentSection];
    if (!section) return;
    const body = content.querySelector(".activity-body");
    if (!body) return;
    const key = e.key.toUpperCase();
    if (section.type === "fixFail") {
      if (key === "F") { e.preventDefault(); body.querySelector('[data-answer="FIX"]')?.click(); }
      else if (key === "X") { e.preventDefault(); body.querySelector('[data-answer="FAIL"]')?.click(); }
      else if (key === "ENTER") { e.preventDefault(); content.querySelector(".control-row button")?.click(); }
    } else if (section.type === "rapidQuiz" || section.type === "singleChoice" || section.type === "finalQuiz" || section.type === "simulation") {
      const idx = ["A", "B", "C", "D"].indexOf(key);
      if (idx !== -1) { e.preventDefault(); body.querySelector(`[data-choice="${idx}"]`)?.click(); }
      else if (key === "ENTER") { e.preventDefault(); content.querySelector(".control-row button")?.click(); }
    }
  });
}

function renderNav() {
  nav.innerHTML = "";
  sections.forEach((section, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = index === currentSection ? "active" : "";
    button.innerHTML = `${section.title}<span>${section.time}</span>`;
    button.addEventListener("click", () => {
      currentSection = index;
      renderSection();
    });
    nav.appendChild(button);
  });
}

function renderSection() {
  const section = sections[currentSection];
  title.textContent = section.title;
  sectionTime.textContent = section.time;
  content.innerHTML = "";
  renderNav();
  renderModeButtons();
  renderExamScore();
  document.getElementById("prev-section").disabled = currentSection === 0;
  document.getElementById("next-section").disabled = currentSection === sections.length - 1;

  if (section.type === "fixFail") renderFixFail(section);
  if (section.type === "rapidQuiz") renderRapidQuiz(section);
  if (section.type === "singleChoice") renderSingleChoice(section);
  if (section.type === "escape") renderEscape(section);
  if (section.type === "matching") renderMatching(section);
  if (section.type === "mistakes") renderMistakes(section);
  if (section.type === "finalQuiz") renderFinalQuiz(section);
  if (section.type === "simulation") renderSimulation(section);
  if (section.type === "pbqCli") renderPbqCli(section);
  if (section.type === "pbqTopology") renderPbqTopology(section);
  if (section.type === "pbqConfig") renderPbqConfig(section);
  if (section.type === "bookmarks") {
    if (missedQuizState.active && bookmarks.length) { renderMissedQuiz(); return; }
    renderBookmarks(section);
  }
}

function panel(section) {
  const template = document.getElementById("activity-shell");
  const node = template.content.cloneNode(true);
  const modeNote = appMode === "exam" ? "Exam mode: choose an answer first, then submit when ready."
    : appMode === "comptia" ? "CompTIA mode: select your answer and submit — no going back, no skipping."
    : section.intro;
  node.querySelector(".activity-copy").innerHTML = `<p class="lead">${modeNote}</p>`;
  node.querySelector(".instructor-note").textContent = section.instructor;
  content.appendChild(node);
  return content.querySelector(".activity-panel:last-child");
}

function renderFixFail(section) {
  const view = panel(section);
  const body = view.querySelector(".activity-body");
  const controls = view.querySelector(".control-row");
  const local = state.warmup;
  const bank = section.banks[local.bankIndex];
  const totalBanks = section.banks.length;
  const activeIndex = getActiveRotatingIndex(local, bank.items.length);
  const item = bank.items[activeIndex];
  const savedAnswer = local.answers[activeIndex];
  local.selected = savedAnswer !== undefined ? savedAnswer.selected : null;
  local.revealed = savedAnswer !== undefined ? savedAnswer.revealed : false;
  body.innerHTML = `
    <div class="prompt-card">
      <p class="eyebrow">${bank.label} · Scenario ${local.position + 1} of ${bank.items.length}</p>
      <code class="code-output">${escapeHtml(item.prompt)}</code>
    </div>
    <div class="answer-row">
      ${["FIX", "FAIL"].map((choice) => {
        const selected = local.selected === choice ? "selected" : "";
        const correct = local.revealed && choice === item.answer ? "correct" : "";
        const wrong = local.revealed && local.selected === choice && choice !== item.answer ? "wrong" : "";
        return `<button class="choice-button ${selected} ${correct} ${wrong}" data-answer="${choice}" type="button">${choice}</button>`;
      }).join("")}
    </div>
    <p class="keyboard-hint"><kbd>F</kbd> = FIX · <kbd>X</kbd> = FAIL · <kbd>Enter</kbd> to submit</p>
    <div class="feedback ${local.revealed ? getResultClass(local.selected, item.answer) : "hidden"}">
      ${answerDetailHtml({ answer: item.answer, why: item.why, prompt: item.prompt, reasoning: item.reasoning })}
    </div>
  `;
  body.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      local.selected = button.dataset.answer;
      if (appMode === "exam" || appMode === "comptia") {
        local.answers[activeIndex] = { selected: local.selected, revealed: false, correct: null };
        renderSection();
        return;
      }
      local.revealed = true;
      local.answers[activeIndex] = { selected: local.selected, revealed: true, correct: local.selected === item.answer };
      renderSection();
    });
  });
  controls.append(
    makeButton(appMode !== "study" ? "Submit Answer" : "Reveal Answer", () => {
      if (appMode !== "study" && !local.selected) {
        showTemporaryFeedback(body, "Choose FIX or FAIL before submitting.");
        return;
      }
      local.revealed = true;
      const isCorrect = local.selected === item.answer;
      local.answers[activeIndex] = { selected: local.selected, revealed: true, correct: isCorrect };
      renderSection();
      if (appMode === "comptia") {
        injectCountdownBar(body);
        comptiaAdvance(local, bank.items.length, {
          id: "warmup-" + activeIndex,
          section: section.title,
          prompt: item.prompt,
          answer: item.answer,
          why: item.why
        }, !isCorrect, bank, section.title);
      }
    }),
    makeButton(getBookmarkLabel("warmup", activeIndex), () => {
      toggleBookmark({
        id: "warmup-" + activeIndex,
        section: section.title,
        prompt: item.prompt,
        answer: item.answer,
        why: item.why
      });
      renderSection();
    }, "secondary"),
    ...(appMode !== "comptia" ? [makeButton("Previous Scenario", () => {
      retreatRotation(local, bank.items.length);
      renderSection();
    }, "secondary")] : []),
    makeButton("Next Scenario", () => {
      if (comptiaTimerId) { clearTimeout(comptiaTimerId); comptiaTimerId = null; }
      advanceRotation(local, bank.items.length);
      renderSection();
    }, "secondary"),
    ...(appMode !== "comptia" && local.bankIndex > 0 ? [makeButton("← Previous Bank", () => {
      local.bankIndex--; local.order = []; local.position = 0; local.answers = {}; local.selected = null; local.revealed = false;
      renderSection();
    }, "secondary")] : []),
    ...(local.bankIndex < totalBanks - 1 ? [makeButton("Next Bank →", () => {
      local.bankIndex++; local.order = []; local.position = 0; local.answers = {}; local.selected = null; local.revealed = false;
      renderSection();
    }, "secondary")] : []),
    makeButton("Reset", () => {
      resetRotation(local, bank.items.length);
      local.selected = null;
      local.revealed = false;
      local.answers = {};
      renderSection();
    }, "secondary")
  );
}

function renderRapidQuiz(section) {
  const view = panel(section);
  const body = view.querySelector(".activity-body");
  const controls = view.querySelector(".control-row");
  const local = state.sprint;
  const bank = section.banks[local.bankIndex];
  const totalBanks = section.banks.length;
  const activeIndex = getActiveRotatingIndex(local, bank.questions.length);
  const q = bank.questions[activeIndex];
  const letters = ["A", "B", "C", "D"];
  const savedAnswer = local.answers[activeIndex];
  local.selected = savedAnswer !== undefined ? savedAnswer.selected : null;
  local.revealed = savedAnswer !== undefined ? savedAnswer.revealed : false;
  body.innerHTML = `
    <div class="prompt-card">
      <p class="eyebrow">${bank.label} · Question ${local.position + 1} of ${bank.questions.length} | A=thumbs up B=heart C=surprised D=clap</p>
      <p class="large-prompt">${q.q}</p>
    </div>
    <div class="grid two">
      ${q.choices.map((choice, index) => {
        const selected = local.selected === index ? "selected" : "";
        const correct = local.revealed && index === q.answer ? "correct" : "";
        const wrong = local.revealed && local.selected === index && index !== q.answer ? "wrong" : "";
        return `<button class="choice-button ${selected} ${correct} ${wrong}" data-choice="${index}" type="button">${letters[index]}. ${choice}</button>`;
      }).join("")}
    </div>
    <p class="keyboard-hint"><kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd> <kbd>D</kbd> to select · <kbd>Enter</kbd> to submit</p>
    <div class="feedback ${local.revealed ? getResultClass(local.selected, q.answer) : "hidden"}">
      ${answerDetailHtml({ answer: letters[q.answer] + ". " + q.choices[q.answer], why: q.why, prompt: q.q, reasoning: q.reasoning })}
    </div>
  `;
  body.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      local.selected = Number(button.dataset.choice);
      local.revealed = appMode === "study";
      local.answers[activeIndex] = { selected: local.selected, revealed: local.revealed, correct: local.revealed ? local.selected === q.answer : null };
      renderSection();
    });
  });
  controls.append(
    makeButton(appMode !== "study" ? "Submit Answer" : "Reveal Answer", () => {
      if (appMode !== "study" && local.selected === null) {
        showTemporaryFeedback(body, "Choose an answer before submitting.");
        return;
      }
      local.revealed = true;
      const isCorrect = local.selected === q.answer;
      local.answers[activeIndex] = { selected: local.selected, revealed: true, correct: isCorrect };
      renderSection();
      if (appMode === "comptia") {
        injectCountdownBar(body);
        comptiaAdvance(local, bank.questions.length, {
          id: "sprint-" + activeIndex,
          section: section.title,
          prompt: q.q,
          answer: letters[q.answer] + ". " + q.choices[q.answer],
          why: q.why
        }, !isCorrect, bank, section.title);
      }
    }),
    makeButton(getBookmarkLabel("sprint", activeIndex), () => {
      toggleBookmark({
        id: "sprint-" + activeIndex,
        section: section.title,
        prompt: q.q,
        answer: letters[q.answer] + ". " + q.choices[q.answer],
        why: q.why
      });
      renderSection();
    }, "secondary"),
    ...(appMode !== "comptia" ? [makeButton("Previous Question", () => {
      retreatRotation(local, bank.questions.length);
      renderSection();
    }, "secondary")] : []),
    makeButton("Next Question", () => {
      if (comptiaTimerId) { clearTimeout(comptiaTimerId); comptiaTimerId = null; }
      advanceRotation(local, bank.questions.length);
      renderSection();
    }, "secondary"),
    ...(appMode !== "comptia" && local.bankIndex > 0 ? [makeButton("← Previous Bank", () => {
      local.bankIndex--; local.order = []; local.position = 0; local.answers = {}; local.selected = null; local.revealed = false;
      renderSection();
    }, "secondary")] : []),
    ...(local.bankIndex < totalBanks - 1 ? [makeButton("Next Bank →", () => {
      local.bankIndex++; local.order = []; local.position = 0; local.answers = {}; local.selected = null; local.revealed = false;
      renderSection();
    }, "secondary")] : []),
    makeButton("Reset", () => {
      resetRotation(local, bank.questions.length);
      local.selected = null;
      local.revealed = false;
      local.answers = {};
      renderSection();
    }, "secondary")
  );
}

function renderSingleChoice(section) {
  const view = panel(section);
  const body = view.querySelector(".activity-body");
  const controls = view.querySelector(".control-row");
  const local = state[section.id];
  const bank = section.banks[local.bankIndex];
  const totalBanks = section.banks.length;
  const questions = bank.questions;
  const activeIndex = getActiveRotatingIndex(local, questions.length);
  const active = questions[activeIndex];
  const savedAnswer = local.answers[activeIndex];
  local.selected = savedAnswer !== undefined ? savedAnswer.selected : null;
  local.revealed = savedAnswer !== undefined ? savedAnswer.revealed : false;
  body.innerHTML = `
    <div class="prompt-card">
      <p class="eyebrow">${bank.label} · Question ${local.position + 1} of ${questions.length}</p>
      <p class="large-prompt">${active.prompt}</p>
    </div>
    <div class="grid">
      ${active.choices.map((choice, index) => {
        const selected = local.selected === index ? "selected" : "";
        const result = local.revealed && index === active.answer ? "correct" : "";
        const wrong = local.revealed && local.selected === index && index !== active.answer ? "wrong" : "";
        return `<button class="choice-button ${selected} ${result} ${wrong}" data-choice="${index}" type="button">${index + 1}. ${choice}</button>`;
      }).join("")}
    </div>
    <p class="keyboard-hint"><kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd> <kbd>D</kbd> to select · <kbd>Enter</kbd> to submit</p>
    <div class="feedback ${local.revealed ? getResultClass(local.selected, active.answer) : "hidden"}">
      ${answerDetailHtml({ answer: `${active.answer + 1}. ${active.choices[active.answer]}`, why: active.why, prompt: active.prompt, reasoning: active.reasoning })}
    </div>
  `;
  body.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      local.selected = Number(button.dataset.choice);
      local.revealed = appMode === "study";
      local.answers[activeIndex] = { selected: local.selected, revealed: local.revealed, correct: local.revealed ? local.selected === active.answer : null };
      renderSection();
    });
  });
  controls.append(
    makeButton(appMode !== "study" ? "Submit Answer" : "Reveal Answer", () => {
      if (appMode !== "study" && local.selected === null) {
        showTemporaryFeedback(body, "Choose an answer before submitting.");
        return;
      }
      local.revealed = true;
      const isCorrect = local.selected === active.answer;
      local.answers[activeIndex] = { selected: local.selected, revealed: true, correct: isCorrect };
      renderSection();
      if (appMode === "comptia") {
        injectCountdownBar(body);
        comptiaAdvance(local, questions.length, {
          id: section.id + "-" + activeIndex,
          section: section.title,
          prompt: active.prompt,
          answer: active.choices[active.answer],
          why: active.why
        }, !isCorrect, bank, section.title);
      }
    }),
    makeButton(getBookmarkLabel(section.id, activeIndex), () => {
      toggleBookmark({
        id: section.id + "-" + activeIndex,
        section: section.title,
        prompt: active.prompt,
        answer: active.choices[active.answer],
        why: active.why
      });
      renderSection();
    }, "secondary"),
    ...(appMode !== "comptia" ? [makeButton("Previous Question", () => {
      retreatRotation(local, questions.length);
      renderSection();
    }, "secondary")] : []),
    makeButton("Next Question", () => {
      if (comptiaTimerId) { clearTimeout(comptiaTimerId); comptiaTimerId = null; }
      advanceRotation(local, questions.length);
      renderSection();
    }, "secondary"),
    ...(appMode !== "comptia" && local.bankIndex > 0 ? [makeButton("← Previous Bank", () => {
      local.bankIndex--; local.order = []; local.position = 0; local.answers = {}; local.selected = null; local.revealed = false;
      renderSection();
    }, "secondary")] : []),
    ...(local.bankIndex < totalBanks - 1 ? [makeButton("Next Bank →", () => {
      local.bankIndex++; local.order = []; local.position = 0; local.answers = {}; local.selected = null; local.revealed = false;
      renderSection();
    }, "secondary")] : []),
    makeButton("Reset", () => {
      resetRotation(local, questions.length);
      local.selected = null;
      local.revealed = false;
      local.answers = {};
      renderSection();
    }, "secondary")
  );
}

function renderEscape(section) {
  const view = panel(section);
  const body = view.querySelector(".activity-body");
  const controls = view.querySelector(".control-row");
  const local = state.escape;
  const activeIndex = getActiveRotatingIndex(local, section.locks.length);
  const lock = section.locks[activeIndex];
  body.innerHTML = `
    <div class="prompt-card">
      <p class="eyebrow">${lock.label} | Lock ${local.position + 1} of ${section.locks.length}</p>
      <p class="large-prompt">${lock.prompt}</p>
    </div>
    <form class="input-row" id="escape-form">
      <input id="escape-input" type="text" autocomplete="off" placeholder="Type lock answer">
      <button class="icon-button" type="submit">Unlock</button>
    </form>
    <div id="escape-feedback" class="feedback ${local.complete ? "correct" : "hidden"}">
      ${local.complete ? "All locks solved. The server room is restored." : ""}
    </div>
  `;
  body.querySelector("#escape-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = body.querySelector("#escape-input");
    const value = input.value.trim().toLowerCase();
    const feedback = body.querySelector("#escape-feedback");
    if (lock.answers.includes(value)) {
      feedback.className = "feedback correct";
      feedback.textContent = lock.success;
      if (local.position === section.locks.length - 1) {
        local.complete = true;
      } else {
        advanceRotation(local, section.locks.length);
        setTimeout(renderSection, 650);
      }
    } else {
      feedback.className = "feedback wrong";
      feedback.textContent = "Access denied. Try the cert keyword or port number.";
    }
  });
  controls.append(
    makeButton("Reveal Lock Answer", () => {
      const feedback = body.querySelector("#escape-feedback");
      feedback.className = "feedback correct";
      feedback.innerHTML = answerDetailHtml({ answer: lock.answers[0], why: lock.success, prompt: lock.prompt, reasoning: lock.reasoning });
    }),
    makeButton(getBookmarkLabel("escape", activeIndex), () => {
      toggleBookmark({
        id: "escape-" + activeIndex,
        section: section.title,
        prompt: lock.label + ": " + lock.prompt,
        answer: lock.answers[0],
        why: lock.success
      });
      renderSection();
    }, "secondary"),
    makeButton("Previous Lock", () => {
      retreatRotation(local, section.locks.length);
      local.complete = false;
      renderSection();
    }, "secondary"),
    makeButton("Next Lock", () => {
      advanceRotation(local, section.locks.length);
      local.complete = false;
      renderSection();
    }, "secondary"),
    makeButton("Reset", () => {
      resetRotation(local, section.locks.length);
      local.complete = false;
      renderSection();
    }, "secondary")
  );
}

function renderMatching(section) {
  const view = panel(section);
  const body = view.querySelector(".activity-body");
  const controls = view.querySelector(".control-row");
  const local = state.matching;
  const activeSetIndex = getActiveRotatingIndex(local, section.sets.length);
  const activeSet = section.sets[activeSetIndex];
  body.innerHTML = `
    <div class="prompt-card">
      <p class="eyebrow">Set ${local.position + 1} of ${section.sets.length}</p>
      <p class="lead">Selections are checked for this set only.</p>
    </div>
    <div class="match-grid">
      <div class="match-item">
        <strong>Commands</strong>
        ${activeSet.commands.map((item, index) => `<p>${index + 1}. ${item.command}</p>`).join("")}
      </div>
      <div class="match-item">
        <strong>Jobs</strong>
        ${activeSet.options.map(([letter, prompt]) => `<p>${letter}. ${prompt}</p>`).join("")}
      </div>
    </div>
    <div class="match-form">
      ${activeSet.commands.map((item, index) => `
        <label class="match-row">
          <span>${index + 1}. ${item.command}</span>
          <select data-match="${index}" aria-label="Match ${item.command}">
            <option value="">Choose a letter</option>
            ${activeSet.options.map(([letter]) => `<option value="${letter}" ${local.selections[index] === letter ? "selected" : ""}>${letter}</option>`).join("")}
          </select>
        </label>
      `).join("")}
    </div>
    <div class="feedback ${local.revealed ? getMatchingScore(activeSet, local).className : "hidden"}">
      ${local.revealed ? getMatchingScore(activeSet, local).message : ""}
    </div>
  `;
  body.querySelectorAll("[data-match]").forEach((select) => {
    select.addEventListener("change", () => {
      local.selections[select.dataset.match] = select.value;
    });
  });
  controls.append(
    makeButton("Check Matches", () => {
      local.revealed = true;
      renderSection();
    }),
    makeButton("Reveal Key", () => {
      activeSet.commands.forEach((item, index) => {
        local.selections[index] = item.answer;
      });
      local.revealed = true;
      renderSection();
    }, "secondary"),
    makeButton(getBookmarkLabel("matching", activeSetIndex), () => {
      toggleBookmark({
        id: "matching-" + activeSetIndex,
        section: section.title,
        prompt: activeSet.commands.map((item, index) => `${index + 1}. ${item.command}`).join("\n"),
        answer: activeSet.commands.map((item, index) => `${index + 1}-${item.answer}`).join(", "),
        why: "Saved matching set for later practice."
      });
      renderSection();
    }, "secondary"),
    makeButton("Previous Set", () => {
      retreatRotation(local, section.sets.length);
      local.revealed = false;
      local.selections = {};
      renderSection();
    }, "secondary"),
    makeButton("Next Set", () => {
      advanceRotation(local, section.sets.length);
      local.revealed = false;
      local.selections = {};
      renderSection();
    }, "secondary"),
    makeButton("Reset", () => {
      resetRotation(local, section.sets.length);
      local.revealed = false;
      local.selections = {};
      renderSection();
    }, "secondary")
  );
}

function renderMistakes(section) {
  const view = panel(section);
  const body = view.querySelector(".activity-body");
  body.innerHTML = `
    <ol class="mistake-list">
      ${section.mistakes.map(([titleText, detail]) => `<li><strong>${titleText}</strong><br>${detail}</li>`).join("")}
    </ol>
  `;
}

function renderFinalQuiz(section) {
  const view = panel(section);
  const body = view.querySelector(".activity-body");
  const controls = view.querySelector(".control-row");
  const local = state.final;
  const pageSize = 10;
  ensureFinalOrder(section.questions.length);
  const pageCount = Math.ceil(state.final.order.length / pageSize);
  const page = Math.min(local.page, pageCount - 1);
  const start = page * pageSize;
  const visibleItems = state.final.order
    .slice(start, start + pageSize)
    .map((questionIndex) => ({
      questionIndex,
      item: section.questions[questionIndex]
    }));
  body.innerHTML = `
    <div class="prompt-card">
      <p class="eyebrow">Set ${page + 1} of ${pageCount}</p>
      <p class="lead">Showing 10 questions from a ${section.questions.length}-question bank.</p>
    </div>
    <div class="grid">
      ${visibleItems.map(({ item: [question, answer] }, index) => `
        <div class="mini-card">
          <strong>${start + index + 1}. ${question}</strong>
          <p class="${local.revealed ? "" : "hidden"}">Answer: ${answer}</p>
        </div>
      `).join("")}
    </div>
    <div class="prompt-card score-card ${local.revealed ? "" : "hidden"}">
      <strong>Wrap-up:</strong> Review missed items, then assign a Senior Analyst role to one student for the next session.
    </div>
  `;
  controls.append(
    makeButton("Reveal Answer Key", () => {
      local.revealed = true;
      renderSection();
    }),
    makeButton("Next 10", () => {
      if (page + 1 >= pageCount) {
        state.final.order = shuffleIndices(section.questions.length);
        local.page = 0;
      } else {
        local.page = page + 1;
      }
      local.revealed = false;
      renderSection();
    }, "secondary"),
    makeButton("Previous 10", () => {
      local.page = (page - 1 + pageCount) % pageCount;
      local.revealed = false;
      renderSection();
    }, "secondary"),
    makeButton("Bookmark Set", () => {
      visibleItems.forEach(({ questionIndex, item: [question, answer] }) => {
        addBookmark({
          id: "final-" + questionIndex,
          section: section.title,
          prompt: question,
          answer,
          why: "Saved from the final mock challenge."
        });
      });
      renderSection();
    }, "secondary"),
    makeButton("Hide Key", () => {
      local.revealed = false;
      renderSection();
    }, "secondary")
  );
}

function renderBookmarks(section) {
  const view = panel(section);
  const body = view.querySelector(".activity-body");
  const controls = view.querySelector(".control-row");
  if (!bookmarks.length) {
    body.innerHTML = `
      <div class="prompt-card">
        <p class="large-prompt">No bookmarks yet.</p>
        <p class="lead">Use Bookmark on activities to save questions, scenarios, and answer explanations here.</p>
      </div>
    `;
  } else {
    body.innerHTML = `
      <div class="bookmark-list">
        ${bookmarks.map((item) => `
          <article class="bookmark-card">
            <p class="eyebrow">${item.section}</p>
            <h3>${escapeHtml(item.prompt)}</h3>
            <p><strong>Answer:</strong> ${escapeHtml(item.answer)}</p>
            <p>${escapeHtml(item.why)}</p>
            <button class="icon-button secondary" data-remove-bookmark="${item.id}" type="button">Remove</button>
          </article>
        `).join("")}
      </div>
    `;
    body.querySelectorAll("[data-remove-bookmark]").forEach((button) => {
      button.addEventListener("click", () => {
        removeBookmark(button.dataset.removeBookmark);
        renderSection();
      });
    });
    controls.append(
      makeButton("Study Missed →", () => {
        missedQuizState.active = true;
        missedQuizState.position = 0;
        missedQuizState.revealed = false;
        renderMissedQuiz();
      })
    );
  }
  controls.append(
    makeButton("Clear Bookmarks", () => {
      bookmarks = [];
      saveBookmarks();
      renderSection();
    }, "secondary")
  );
}

function renderMissedQuiz() {
  if (!bookmarks.length) {
    missedQuizState.active = false;
    renderSection();
    return;
  }
  missedQuizState.position = Math.min(missedQuizState.position, bookmarks.length - 1);
  const item = bookmarks[missedQuizState.position];
  content.innerHTML = "";
  const div = document.createElement("div");
  div.className = "activity-panel";
  div.innerHTML = `
    <div class="activity-body">
      <div class="prompt-card">
        <p class="eyebrow">Study Missed · ${missedQuizState.position + 1} of ${bookmarks.length}</p>
        <p class="eyebrow">${escapeHtml(item.section)}</p>
        <p class="large-prompt">${escapeHtml(item.prompt)}</p>
      </div>
      <div class="feedback ${missedQuizState.revealed ? "correct" : "hidden"}">
        <div class="answer-detail">
          <p class="answer-line"><strong>Correct answer:</strong> ${escapeHtml(item.answer)}</p>
          ${item.why ? `<p><strong>Why:</strong> ${escapeHtml(item.why)}</p>` : ""}
        </div>
      </div>
    </div>
    <div class="control-row"></div>
  `;
  content.appendChild(div);
  const controls = div.querySelector(".control-row");
  if (!missedQuizState.revealed) {
    controls.appendChild(makeButton("Reveal Answer", () => {
      missedQuizState.revealed = true;
      renderMissedQuiz();
    }));
  }
  controls.appendChild(makeButton("← Previous", () => {
    missedQuizState.position = Math.max(0, missedQuizState.position - 1);
    missedQuizState.revealed = false;
    renderMissedQuiz();
  }, "secondary"));
  controls.appendChild(makeButton("Next →", () => {
    missedQuizState.position = Math.min(bookmarks.length - 1, missedQuizState.position + 1);
    missedQuizState.revealed = false;
    renderMissedQuiz();
  }, "secondary"));
  controls.appendChild(makeButton("Exit Study Missed", () => {
    missedQuizState.active = false;
    missedQuizState.position = 0;
    missedQuizState.revealed = false;
    renderSection();
  }, "secondary"));
}

function setAppMode(mode) {
  appMode = mode;
  Object.values(state).forEach((local) => {
    if ("revealed" in local) local.revealed = false;
    if ("selected" in local) local.selected = null;
    if ("answers" in local) local.answers = {};
    // bankIndex intentionally NOT reset — bank position persists across mode switches
  });
  renderSection();
}

function renderModeButtons() {
  const studyButton = document.getElementById("study-mode");
  const examButton = document.getElementById("exam-mode");
  const comptiaButton = document.getElementById("comptia-mode");
  studyButton.classList.toggle("active", appMode === "study");
  examButton.classList.toggle("active", appMode === "exam");
  comptiaButton.classList.toggle("active", appMode === "comptia");
  studyButton.setAttribute("aria-pressed", appMode === "study");
  examButton.setAttribute("aria-pressed", appMode === "exam");
  comptiaButton.setAttribute("aria-pressed", appMode === "comptia");
}

function getResultClass(selected, answer) {
  if (selected === null || selected === answer) return "correct";
  return "wrong";
}

function answerDetailHtml({ answer, why, prompt, reasoning }) {
  return `
    <div class="answer-detail">
      <p class="answer-line"><strong>Correct answer:</strong> ${escapeHtml(answer)}</p>
      <p><strong>Why:</strong> ${escapeHtml(why)}</p>
      <p class="rule-line"><strong>How to reason it out:</strong> ${escapeHtml(reasoning || getReasoningRule(prompt, why))}</p>
    </div>
  `;
}

function getReasoningRule(prompt, why) {
  const text = `${prompt || ""} ${why || ""}`.toLowerCase();
  if (text.includes("169.254") || text.includes("apipa")) {
    return "A 169.254 address means the device did not receive normal DHCP settings, so check DHCP, cabling, or renew the lease before blaming websites.";
  }
  if (text.includes("dns") || text.includes("name") || text.includes("hostname") || text.includes("example.com") || text.includes("google.com")) {
    return "If numeric IP traffic works but names fail, separate connectivity from name resolution and test DNS with nslookup.";
  }
  if (text.includes("gateway") || text.includes("different networks") || text.includes("router")) {
    return "Traffic leaving the local subnet needs a reachable default gateway or router; compare the host IP, mask, and gateway first.";
  }
  if (text.includes("media disconnected") || text.includes("cable") || text.includes("physical") || text.includes("layer 1")) {
    return "Physical symptoms point to Layer 1, so verify cable, link light, adapter state, wall jack, and switch port before changing software settings.";
  }
  if (text.includes("switch") || text.includes("mac") || text.includes("vlan") || text.includes("spanning tree") || text.includes("stp")) {
    return "Switching issues usually live at Layer 2, where MAC learning, VLAN membership, and STP port state decide whether frames can move.";
  }
  if (text.includes("ping") || text.includes("tracert") || text.includes("netstat") || text.includes("ipconfig")) {
    return "Pick the command that matches the question: ipconfig for local settings, ping for reachability, tracert for path, nslookup for DNS, and netstat for connections.";
  }
  if (text.includes("port") || text.includes("http") || text.includes("https") || text.includes("ssh")) {
    return "Service questions often reduce to protocol and port mapping: HTTP 80, HTTPS 443, DNS 53, and SSH 22.";
  }
  return "Start from the evidence in the prompt, identify the OSI layer or service involved, then choose the answer that fixes that specific failure.";
}

function showTemporaryFeedback(body, message) {
  const existing = body.querySelector(".feedback");
  existing.className = "feedback wrong";
  existing.textContent = message;
}

function getMatchingScore(section, local) {
  const correct = section.commands.filter((item, index) => local.selections[index] === item.answer).length;
  const total = section.commands.length;
  const key = section.commands
    .map((item, index) => `${index + 1}-${item.answer}`)
    .join(", ");
  return {
    className: correct === total ? "correct" : "wrong",
    message: `<strong>${correct} of ${total} correct.</strong> Key: ${key}`
  };
}

function getActiveRotatingIndex(local, length) {
  ensureRotation(local, length);
  local.index = local.order[local.position];
  return local.index;
}

function ensureRotation(local, length) {
  if (!local.order || local.order.length !== length) {
    local.order = shuffleIndices(length);
    local.position = 0;
  }
}

function advanceRotation(local, length) {
  ensureRotation(local, length);
  if (local.position >= length - 1) {
    local.order = shuffleIndices(length);
    local.position = 0;
  } else {
    local.position += 1;
  }
  local.index = local.order[local.position];
}

function retreatRotation(local, length) {
  ensureRotation(local, length);
  if (local.position <= 0) {
    local.position = length - 1;
  } else {
    local.position -= 1;
  }
  local.index = local.order[local.position];
}

function resetRotation(local, length) {
  local.order = shuffleIndices(length);
  local.position = 0;
  local.index = local.order[0];
}

function ensureFinalOrder(length) {
  if (!state.final.order || state.final.order.length !== length) {
    state.final.order = shuffleIndices(length);
    state.final.page = 0;
  }
}

function shuffleIndices(length) {
  const values = Array.from({ length }, (_, index) => index);
  for (let index = values.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [values[index], values[swapIndex]] = [values[swapIndex], values[index]];
  }
  return values;
}

function loadBookmarks() {
  try {
    const parsed = JSON.parse(localStorage.getItem(bookmarkStorageKey) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveBookmarks() {
  localStorage.setItem(bookmarkStorageKey, JSON.stringify(bookmarks));
}

function addBookmark(item) {
  if (!bookmarks.some((bookmark) => bookmark.id === item.id)) {
    bookmarks = [item, ...bookmarks];
    saveBookmarks();
  }
}

function removeBookmark(id) {
  bookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
  saveBookmarks();
}

function toggleBookmark(item) {
  if (bookmarks.some((bookmark) => bookmark.id === item.id)) {
    removeBookmark(item.id);
  } else {
    addBookmark(item);
  }
}

function getBookmarkLabel(sectionId, itemIndex) {
  return bookmarks.some((bookmark) => bookmark.id === sectionId + "-" + itemIndex) ? "Bookmarked" : "Bookmark";
}

function makeButton(label, onClick, variant = "") {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  button.className = `icon-button ${variant}`.trim();
  button.addEventListener("click", onClick);
  return button;
}

function moveSection(direction) {
  currentSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));
  renderSection();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleTimer() {
  const button = document.getElementById("timer-toggle");
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    button.textContent = "Start";
    button.setAttribute("aria-label", "Start timer");
    return;
  }
  timerId = setInterval(() => {
    timerSeconds += 1;
    renderTimer();
  }, 1000);
  button.textContent = "Pause";
  button.setAttribute("aria-label", "Pause timer");
}

function resetTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  timerSeconds = 0;
  document.getElementById("timer-toggle").textContent = "Start";
  renderTimer();
}

function renderTimer() {
  const minutes = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const seconds = String(timerSeconds % 60).padStart(2, "0");
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function collectSimQuestions() {
  const pool = [];
  sections.forEach((section) => {
    if (!section.banks) return;
    if (section.type === "rapidQuiz") {
      section.banks.forEach((bank) => {
        bank.questions.forEach((q) => {
          pool.push({ sectionTitle: section.title, prompt: q.q, choices: q.choices, answer: q.answer, why: q.why, difficulty: q.difficulty || "medium" });
        });
      });
    } else if (section.type === "singleChoice") {
      section.banks.forEach((bank) => {
        bank.questions.forEach((q) => {
          pool.push({ sectionTitle: section.title, prompt: q.prompt, choices: q.choices, answer: q.answer, why: q.why, difficulty: q.difficulty || "medium" });
        });
      });
    }
  });
  return pool;
}

function startSimTimer() {
  if (simTimerId) clearInterval(simTimerId);
  simTimerId = setInterval(() => {
    const local = state.simulation;
    if (!local.endTime) return;
    const timeLeft = Math.max(0, Math.floor((local.endTime - Date.now()) / 1000));
    if (timeLeft <= 0) {
      local.done = true;
      stopSimTimer();
      renderSection();
      return;
    }
    const timerEl = content.querySelector(".sim-timer");
    if (timerEl) {
      const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
      const secs = String(timeLeft % 60).padStart(2, "0");
      timerEl.textContent = `⏱ ${mins}:${secs}`;
      timerEl.className = timeLeft < 300 ? "sim-timer urgent" : "sim-timer";
    }
  }, 1000);
}

function stopSimTimer() {
  if (simTimerId) { clearInterval(simTimerId); simTimerId = null; }
}

function renderSimulation(section) {
  const view = panel(section);
  const body = view.querySelector(".activity-body");
  const controls = view.querySelector(".control-row");
  const local = state.simulation;
  const letters = ["A", "B", "C", "D"];

  // Start screen
  if (!local.questions) {
    const pool = collectSimQuestions();
    body.innerHTML = `
      <div class="prompt-card">
        <p class="eyebrow">CompTIA Network+ Style Practice Exam</p>
        <p class="large-prompt">Ready to begin?</p>
        <p class="lead">${pool.length} questions · 90 minutes · Forward-only · No hints during exam</p>
        <p class="lead">Final score is shown as a <strong>scaled score out of 900</strong> — 720 is passing on the real CompTIA exam.</p>
      </div>
    `;
    controls.appendChild(makeButton("Begin Exam →", () => {
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      local.questions = shuffled.slice(0, Math.min(90, shuffled.length));
      local.position = 0;
      local.answers = {};
      local.done = false;
      local.endTime = Date.now() + 90 * 60 * 1000;
      startSimTimer();
      renderSection();
    }));
    controls.appendChild(makeButton("Reset", () => {
      stopSimTimer();
      local.questions = null;
      local.position = 0;
      local.answers = {};
      local.done = false;
      local.endTime = null;
      renderSection();
    }, "secondary"));
    return;
  }

  // Done / time-up screen
  if (local.done || local.position >= local.questions.length) {
    stopSimTimer();
    local.done = true;
    const correct = Object.values(local.answers).filter((a) => a.correct).length;
    const total = local.questions.length;
    const pct = total ? Math.round((correct / total) * 100) : 0;
    const scaled = Math.round(100 + (correct / total) * 800);
    const pass = scaled >= 720;
    const cats = {};
    local.questions.forEach((q, i) => {
      if (!cats[q.sectionTitle]) cats[q.sectionTitle] = { correct: 0, total: 0 };
      cats[q.sectionTitle].total++;
      if (local.answers[i] && local.answers[i].correct) cats[q.sectionTitle].correct++;
    });
    body.innerHTML = `
      <div class="prompt-card">
        <p class="eyebrow">Exam Complete</p>
        <p class="large-prompt">${pass ? "✅ Pass" : "❌ Not Yet Passing"}</p>
        <p class="lead">Scaled Score: <strong class="${pass ? "score-correct" : "score-wrong"}">${scaled} / 900</strong></p>
        <p class="lead">Raw: ${correct} / ${total} correct (${pct}%)</p>
      </div>
      <div class="sim-breakdown">
        <p class="eyebrow">Score by category:</p>
        ${Object.entries(cats).map(([title, cat]) => {
          const catPct = Math.round((cat.correct / cat.total) * 100);
          return `<div class="sim-cat-row">
            <span class="sim-cat-name">${escapeHtml(title)}</span>
            <span class="sim-cat-score ${catPct >= 70 ? "score-correct" : "score-wrong"}">${cat.correct}/${cat.total} (${catPct}%)</span>
          </div>`;
        }).join("")}
      </div>
    `;
    controls.appendChild(makeButton("Reset & Try Again", () => {
      stopSimTimer();
      local.questions = null;
      local.position = 0;
      local.answers = {};
      local.done = false;
      local.endTime = null;
      renderSection();
    }, "secondary"));
    return;
  }

  // Question screen
  const q = local.questions[local.position];
  const saved = local.answers[local.position];
  const timeLeft = local.endTime ? Math.max(0, Math.floor((local.endTime - Date.now()) / 1000)) : 0;
  const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const secs = String(timeLeft % 60).padStart(2, "0");
  body.innerHTML = `
    <div class="prompt-card">
      <p class="eyebrow">Question ${local.position + 1} of ${local.questions.length} · ${escapeHtml(q.sectionTitle)} · <span class="${timeLeft < 300 ? "sim-timer urgent" : "sim-timer"}">⏱ ${mins}:${secs}</span></p>
      <p class="large-prompt">${escapeHtml(q.prompt)}</p>
    </div>
    <div class="grid">
      ${q.choices.map((choice, index) => {
        const selected = saved && saved.selected === index ? "selected" : "";
        return `<button class="choice-button ${selected}" data-choice="${index}" type="button">${letters[index]}. ${escapeHtml(choice)}</button>`;
      }).join("")}
    </div>
    <p class="keyboard-hint"><kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd> <kbd>D</kbd> to select · <kbd>Enter</kbd> to submit</p>
  `;
  body.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      if (saved) return;
      local.answers[local.position] = { selected: Number(button.dataset.choice), correct: Number(button.dataset.choice) === q.answer };
      renderSection();
    });
  });
  controls.appendChild(makeButton("Submit & Next →", () => {
    if (!local.answers[local.position]) {
      showTemporaryFeedback(body, "Select an answer before proceeding.");
      return;
    }
    local.position++;
    if (local.position >= local.questions.length) local.done = true;
    renderSection();
  }));
  controls.appendChild(makeButton("End Exam Early", () => {
    local.done = true;
    renderSection();
  }, "secondary"));
}

// ── PBQ: CLI Diagnostics ───────────────────────────────────────────────────
function renderPbqCli(section) {
  const local = state[section.id];
  const bank = section.banks[local.bankIndex];
  const { p, body, controls } = panel(section);
  p.innerHTML = `<p class="eyebrow">Performance-Based Question · Lab ${local.bankIndex + 1} of ${section.banks.length}</p>`;
  body.innerHTML = `
    <div class="pbq-scenario">${escapeHtml(bank.scenario)}</div>
    <p class="keyboard-hint">Hint: ${escapeHtml(bank.hint)}</p>
    <div class="pbq-terminal" id="pbq-terminal-output" aria-live="polite">${
      local.history.map(h => `<div class="pbq-terminal-line pbq-cmd">&gt; ${escapeHtml(h.cmd)}</div><div class="pbq-terminal-line pbq-out">${escapeHtml(h.out)}</div>`).join("")
    }</div>
    <div class="pbq-input-row">
      <span class="pbq-prompt">&gt;</span>
      <input class="pbq-input" id="pbq-cmd-input" type="text" placeholder="Type a command and press Enter" autocomplete="off" spellcheck="false" ${local.submitted ? "disabled" : ""}>
    </div>
    ${!local.submitted ? `
      <p class="pbq-diag-label">Diagnosis:</p>
      <div class="grid" id="pbq-choices">
        ${bank.choices.map((c, i) => {
          const sel = local.selected === i ? "selected" : "";
          return `<button class="choice-button ${sel}" data-choice="${i}" type="button">${letters[i]}. ${escapeHtml(c)}</button>`;
        }).join("")}
      </div>
      <p class="keyboard-hint"><kbd>A</kbd>–<kbd>${letters[bank.choices.length - 1]}</kbd> to select · <kbd>Enter</kbd> to submit</p>
    ` : `
      <p class="pbq-diag-label">Diagnosis:</p>
      <div class="grid">
        ${bank.choices.map((c, i) => {
          const isCorrect = i === bank.answer;
          const wasSelected = i === local.selected;
          const cls = isCorrect ? "choice-button correct" : wasSelected ? "choice-button wrong" : "choice-button";
          return `<button class="choice-button ${cls} disabled" disabled type="button">${letters[i]}. ${escapeHtml(c)}</button>`;
        }).join("")}
      </div>
      <div class="why-box"><strong>Explanation:</strong> ${escapeHtml(bank.why)}</div>
    `}
  `;

  // Wire terminal input
  const input = body.querySelector("#pbq-cmd-input");
  if (input) {
    input.focus();
    input.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const cmd = input.value.trim().toLowerCase();
      if (!cmd) return;
      const cmdMap = bank.commands;
      let out = cmdMap[cmd] || cmdMap[cmd.replace(/\s+/g, " ")] || `'${cmd}' is not recognized as an internal or external command, operable program or batch file.`;
      local.history.push({ cmd: input.value.trim(), out });
      input.value = "";
      renderSection();
    });
    input.addEventListener("focus", () => {});
  }

  // Wire choice selection
  body.querySelectorAll("[data-choice]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (local.submitted) return;
      local.selected = Number(btn.dataset.choice);
      renderSection();
    });
  });

  if (!local.submitted) {
    controls.appendChild(makeButton("Submit Diagnosis", () => {
      if (local.selected === null) {
        showTemporaryFeedback(body, "Select a diagnosis before submitting.");
        return;
      }
      local.submitted = true;
      renderSection();
    }));
    if (local.bankIndex > 0) {
      controls.appendChild(makeButton("← Previous", () => {
        local.bankIndex--;
        state[section.id] = { bankIndex: local.bankIndex, history: [], submitted: false, selected: null, revealed: false };
        renderSection();
      }, "secondary"));
    }
  } else {
    if (local.bankIndex < section.banks.length - 1) {
      controls.appendChild(makeButton("Next Scenario →", () => {
        local.bankIndex++;
        state[section.id] = { bankIndex: local.bankIndex, history: [], submitted: false, selected: null, revealed: false };
        renderSection();
      }));
    }
    if (local.bankIndex > 0) {
      controls.appendChild(makeButton("← Previous", () => {
        local.bankIndex--;
        state[section.id] = { bankIndex: local.bankIndex, history: [], submitted: false, selected: null, revealed: false };
        renderSection();
      }, "secondary"));
    }
  }
}

// ── PBQ: Network Topology ──────────────────────────────────────────────────
function renderPbqTopology(section) {
  const local = state[section.id];
  const bank = section.banks[local.bankIndex];
  const { p, body, controls } = panel(section);
  p.innerHTML = `<p class="eyebrow">Performance-Based Question · Scenario ${local.bankIndex + 1} of ${section.banks.length}</p>`;

  body.innerHTML = `
    <div class="pbq-scenario">${escapeHtml(bank.scenario)}</div>
    <p class="pbq-diag-label">Click the device most likely causing the problem:</p>
    <div class="pbq-topology">
      ${bank.topology.map(device => {
        let cls = "pbq-device";
        if (local.selected === device.id) cls += " selected";
        if (local.revealed) {
          cls += device.id === bank.answer ? " correct" : local.selected === device.id ? " wrong" : "";
        }
        return `<div class="${cls}" data-device="${device.id}" title="${escapeHtml(device.desc)}" ${local.revealed ? "" : "role=\"button\" tabindex=\"0\""}>
          <span class="pbq-device-icon">${device.icon}</span>
          <span class="pbq-device-label">${escapeHtml(device.label)}</span>
          ${local.revealed && device.id === bank.answer ? '<span class="pbq-device-correct-tag">✓</span>' : ""}
        </div>`;
      }).join('<div class="pbq-connector">—</div>')}
    </div>
    ${local.revealed ? `<div class="why-box"><strong>Explanation:</strong> ${escapeHtml(bank.why)}</div>` : ""}
  `;

  if (!local.revealed) {
    body.querySelectorAll("[data-device]").forEach(el => {
      el.addEventListener("click", () => {
        local.selected = el.dataset.device;
        renderSection();
      });
      el.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); local.selected = el.dataset.device; renderSection(); }
      });
    });
    controls.appendChild(makeButton("Submit", () => {
      if (!local.selected) { showTemporaryFeedback(body, "Click a device first."); return; }
      local.revealed = true;
      renderSection();
    }));
  } else {
    if (local.bankIndex < section.banks.length - 1) {
      controls.appendChild(makeButton("Next Scenario →", () => {
        local.bankIndex++;
        state[section.id] = { bankIndex: local.bankIndex, selected: null, revealed: false };
        renderSection();
      }));
    }
  }
  if (local.bankIndex > 0) {
    controls.appendChild(makeButton("← Previous", () => {
      local.bankIndex--;
      state[section.id] = { bankIndex: local.bankIndex, selected: null, revealed: false };
      renderSection();
    }, "secondary"));
  }
}

// ── PBQ: IP Configuration Form ─────────────────────────────────────────────
function renderPbqConfig(section) {
  const local = state[section.id];
  const bank = section.banks[local.bankIndex];
  const { p, body, controls } = panel(section);
  p.innerHTML = `<p class="eyebrow">Performance-Based Question · Config ${local.bankIndex + 1} of ${section.banks.length}</p>`;

  body.innerHTML = `
    <div class="pbq-scenario">${escapeHtml(bank.scenario)}</div>
    <form class="pbq-form" id="pbq-config-form" autocomplete="off">
      ${bank.fields.map(field => {
        const val = local.values[field.id] || "";
        let inputCls = "pbq-config-input";
        if (local.submitted) {
          const correct = val.trim() === field.answer.trim();
          inputCls += correct ? " pbq-correct" : " pbq-wrong";
        }
        return `
          <div class="pbq-field-row">
            <label class="pbq-field-label" for="pbq-${field.id}">${escapeHtml(field.label)}</label>
            <input class="${inputCls}" id="pbq-${field.id}" data-field="${field.id}" type="text"
              value="${escapeHtml(val)}" ${local.submitted ? "readonly" : ""} placeholder="${escapeHtml(field.hint)}">
            ${local.submitted ? `<span class="pbq-answer-reveal">${val.trim() === field.answer ? "✓" : `✗ ${escapeHtml(field.answer)}`}</span>` : ""}
          </div>`;
      }).join("")}
    </form>
    ${local.submitted ? `<div class="why-box"><strong>Explanation:</strong> ${escapeHtml(bank.why)}</div>` : ""}
  `;

  // Track input changes
  body.querySelectorAll("[data-field]").forEach(input => {
    input.addEventListener("input", () => { local.values[input.dataset.field] = input.value; });
  });

  if (!local.submitted) {
    controls.appendChild(makeButton("Submit", () => {
      bank.fields.forEach(f => {
        const el = body.querySelector(`[data-field="${f.id}"]`);
        if (el) local.values[f.id] = el.value;
      });
      local.submitted = true;
      renderSection();
    }));
  } else {
    if (local.bankIndex < section.banks.length - 1) {
      controls.appendChild(makeButton("Next Scenario →", () => {
        local.bankIndex++;
        state[section.id] = { bankIndex: local.bankIndex, values: {}, submitted: false, revealed: false };
        renderSection();
      }));
    }
  }
  if (local.bankIndex > 0) {
    controls.appendChild(makeButton("← Previous", () => {
      local.bankIndex--;
      state[section.id] = { bankIndex: local.bankIndex, values: {}, submitted: false, revealed: false };
      renderSection();
    }, "secondary"));
  }
}

init();
