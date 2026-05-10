const sections = [
  {
    id: "warmup",
    time: "00-10 minutes",
    title: "Warm-Up: Fix or Fail?",
    type: "fixFail",
    intro: "Show one scenario at a time. Students choose FIX if the setup should work or FAIL if the setup has a problem.",
    instructor: "Have students commit to FIX or FAIL, then reveal the reason and move to the next scenario.",
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
    id: "sprint",
    time: "10-30 minutes",
    title: "Certification Sprint",
    type: "rapidQuiz",
    intro: "Read each question out loud. Students answer with reactions: thumbs up = A, heart = B, surprised = C, clap = D.",
    instructor: "Keep the pace quick. Reveal the correct letter, give the one-line reason, then move on.",
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
      },
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
  },
  {
    id: "command",
    time: "30-45 minutes",
    title: "Choose the Next Command",
    type: "singleChoice",
    intro: "Students choose the best next troubleshooting command for each scenario.",
    instructor: "Push students toward bottom-up troubleshooting: verify the local device, then the gateway, then the path, then services.",
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
      },
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
      },
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
    id: "bookmarks",
    time: "Review later",
    title: "Bookmarked Review",
    type: "bookmarks",
    intro: "Review saved questions and scenarios from this browser.",
    instructor: "Bookmarks are stored locally in the student's browser so they can revisit tough items later."
  }
];

let currentSection = 0;
let appMode = "study";
let timerSeconds = 0;
let timerId = null;
const bookmarkStorageKey = "jna-bootcamp-bookmarks";
const state = {
  warmup: { index: 0, selected: null, revealed: false, order: [], position: 0, answers: {} },
  sprint: { index: 0, selected: null, revealed: false, order: [], position: 0, answers: {} },
  command: { index: 0, selected: null, revealed: false, order: [], position: 0, answers: {} },
  escape: { index: 0, complete: false, order: [], position: 0 },
  detective: { index: 0, selected: null, revealed: false, order: [], position: 0, answers: {} },
  matching: { revealed: false, selections: {}, order: [], position: 0 },
  mistakes: { revealed: false },
  final: { revealed: false, page: 0, order: [] }
};
let bookmarks = loadBookmarks();

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
  if (appMode !== "exam") {
    el.classList.add("hidden");
    return;
  }
  const { answered, correct } = computeExamScore();
  const wrong = answered - correct;
  const pct = answered > 0 ? Math.round((correct / answered) * 100) : null;
  el.classList.remove("hidden");
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
  document.getElementById("timer-toggle").addEventListener("click", toggleTimer);
  document.getElementById("timer-reset").addEventListener("click", resetTimer);
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
  if (section.type === "bookmarks") renderBookmarks(section);
}

function panel(section) {
  const template = document.getElementById("activity-shell");
  const node = template.content.cloneNode(true);
  const modeNote = appMode === "exam" ? "Exam mode: choose an answer first, then submit when ready." : section.intro;
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
  const activeIndex = getActiveRotatingIndex(local, section.items.length);
  const item = section.items[activeIndex];
  const savedAnswer = local.answers[activeIndex];
  local.selected = savedAnswer !== undefined ? savedAnswer.selected : null;
  local.revealed = savedAnswer !== undefined ? savedAnswer.revealed : false;
  body.innerHTML = `
    <div class="prompt-card">
      <p class="eyebrow">Scenario ${local.position + 1} of ${section.items.length}</p>
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
    <div class="feedback ${local.revealed ? getResultClass(local.selected, item.answer) : "hidden"}">
      ${answerDetailHtml({ answer: item.answer, why: item.why, prompt: item.prompt, reasoning: item.reasoning })}
    </div>
  `;
  body.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      local.selected = button.dataset.answer;
      if (appMode === "exam") {
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
    makeButton(appMode === "exam" ? "Submit Answer" : "Reveal Answer", () => {
      if (appMode === "exam" && !local.selected) {
        showTemporaryFeedback(body, "Choose FIX or FAIL before submitting.");
        return;
      }
      local.revealed = true;
      local.answers[activeIndex] = { selected: local.selected, revealed: true, correct: local.selected === item.answer };
      renderSection();
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
    makeButton("Previous Scenario", () => {
      retreatRotation(local, section.items.length);
      renderSection();
    }, "secondary"),
    makeButton("Next Scenario", () => {
      advanceRotation(local, section.items.length);
      renderSection();
    }, "secondary"),
    makeButton("Reset", () => {
      resetRotation(local, section.items.length);
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
  const activeIndex = getActiveRotatingIndex(local, section.questions.length);
  const q = section.questions[activeIndex];
  const letters = ["A", "B", "C", "D"];
  const savedAnswer = local.answers[activeIndex];
  local.selected = savedAnswer !== undefined ? savedAnswer.selected : null;
  local.revealed = savedAnswer !== undefined ? savedAnswer.revealed : false;
  body.innerHTML = `
    <div class="prompt-card">
      <p class="eyebrow">Question ${local.position + 1} of ${section.questions.length} | A=thumbs up B=heart C=surprised D=clap</p>
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
    makeButton(appMode === "exam" ? "Submit Answer" : "Reveal Answer", () => {
      if (appMode === "exam" && local.selected === null) {
        showTemporaryFeedback(body, "Choose an answer before submitting.");
        return;
      }
      local.revealed = true;
      local.answers[activeIndex] = { selected: local.selected, revealed: true, correct: local.selected === q.answer };
      renderSection();
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
    makeButton("Previous Question", () => {
      retreatRotation(local, section.questions.length);
      renderSection();
    }, "secondary"),
    makeButton("Next Question", () => {
      advanceRotation(local, section.questions.length);
      renderSection();
    }, "secondary"),
    makeButton("Reset", () => {
      resetRotation(local, section.questions.length);
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
  const questions = section.questions || [section];
  const activeIndex = getActiveRotatingIndex(local, questions.length);
  const active = questions[activeIndex];
  const savedAnswer = local.answers[activeIndex];
  local.selected = savedAnswer !== undefined ? savedAnswer.selected : null;
  local.revealed = savedAnswer !== undefined ? savedAnswer.revealed : false;
  body.innerHTML = `
    <div class="prompt-card">
      <p class="eyebrow">Question ${local.position + 1} of ${questions.length}</p>
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
    makeButton(appMode === "exam" ? "Submit Answer" : "Reveal Answer", () => {
      if (appMode === "exam" && local.selected === null) {
        showTemporaryFeedback(body, "Choose an answer before submitting.");
        return;
      }
      local.revealed = true;
      local.answers[activeIndex] = { selected: local.selected, revealed: true, correct: local.selected === active.answer };
      renderSection();
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
    makeButton("Previous Question", () => {
      retreatRotation(local, questions.length);
      renderSection();
    }, "secondary"),
    makeButton("Next Question", () => {
      advanceRotation(local, questions.length);
      renderSection();
    }, "secondary"),
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
  }
  controls.append(
    makeButton("Clear Bookmarks", () => {
      bookmarks = [];
      saveBookmarks();
      renderSection();
    }, "secondary")
  );
}

function setAppMode(mode) {
  appMode = mode;
  Object.values(state).forEach((local) => {
    if ("revealed" in local) local.revealed = false;
    if ("selected" in local) local.selected = null;
    if ("answers" in local) local.answers = {};
  });
  renderSection();
}

function renderModeButtons() {
  const studyButton = document.getElementById("study-mode");
  const examButton = document.getElementById("exam-mode");
  studyButton.classList.toggle("active", appMode === "study");
  examButton.classList.toggle("active", appMode === "exam");
  studyButton.setAttribute("aria-pressed", appMode === "study");
  examButton.setAttribute("aria-pressed", appMode === "exam");
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

init();
