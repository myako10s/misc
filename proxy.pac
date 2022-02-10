function FindProxyForURL(url, host)
{
  host = host.toLowerCase();
  
  if (dnsDomainIs(host, "dff.sp.mbga.jp"))
    return "192.168.101.2:8080";

  return "DIRECT";
}
