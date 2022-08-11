function FindProxyForURL(url, host)
{
  host = host.toLowerCase();
  
  if (dnsDomainIs(host, "dff.sp.mbga.jp"))
    return "PROXY tyro.mydns.jp:8080; DIRECT;";

  return "DIRECT";
}
