using campus;
using campus.Models;
using System.ServiceModel;

namespace campus
{
    [ServiceContract]
    public interface ISOAPService
    {
        [OperationContract]
        Task<List<Subject>> GetDataFromApi();
    }
}
