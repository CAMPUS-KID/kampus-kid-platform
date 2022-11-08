using campus;
using campus.Models;
using GraphQL;
using GraphQL.Client.Http;
using GraphQL.Client.Serializer.Newtonsoft;


namespace campus
{
    public class SOAPService : ISOAPService
    {
        public async Task<List<Subject>> GetDataFromApi()
        {
            var graphQLClient = new GraphQLHttpClient("http://host.docker.internal:4101/api", new NewtonsoftJsonSerializer());
            var subjectRequest = new GraphQLRequest
            {
                Query = @"
                    query GetSubjects{
                        getSubjects{
                            id
                            name
                            code
                            description
                        }
                    }"
            };
            var graphQLResponse = await graphQLClient.SendQueryAsync<ResponseType>(subjectRequest);
            return graphQLResponse.Data.getSubjects;
        }
    }
}
