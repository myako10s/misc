function FindProxyForURL(url, host)
{
  host = host.toLowerCase();
  
  if (dnsDomainIs(host, "dff.sp.mbga.jp"))
    return "PROXY 192.168.101.2:8080; DIRECT;";

  return "DIRECT";
}
