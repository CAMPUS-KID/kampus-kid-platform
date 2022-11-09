FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["campus-kid-interface/campus-kid-interface.csproj", "campus-kid-interface/"]
RUN dotnet restore "campus-kid-interface/campus-kid-interface.csproj"
COPY . .
WORKDIR "/src/campus-kid-interface"
RUN dotnet build "campus-kid-interface.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "campus-kid-interface.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "campus-kid-interface.dll"]