using campus;
using SoapCore;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSoapCore();
builder.Services.AddSingleton<ISOAPService, SOAPService>();
builder.Services.AddMvc();
var app = builder.Build();
app.UseRouting();
app.UseEndpoints(endpoints =>
{
    endpoints.UseSoapEndpoint<ISOAPService>("/Service.svc", new SoapEncoderOptions(), SoapSerializer.DataContractSerializer);
    endpoints.UseSoapEndpoint<ISOAPService>("/Service.asmx", new SoapEncoderOptions(), SoapSerializer.XmlSerializer);
});



app.Run();