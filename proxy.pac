function FindProxyForURL(url, host)
{
  host = host.toLowerCase();
  
  if (dnsDomainIs(host, "dff.sp.mbga.jp") ||
      dnsDomainIs(host, "mitm.it"))
    return "PROXY 192.168.10.7:8080; DIRECT;";

  return "DIRECT";
}
