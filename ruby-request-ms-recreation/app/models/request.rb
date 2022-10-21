class Request 
    include Dynamoid::Document

    table(
        name: "Request",
        key: :id
    )
    field :studentID, :string
    field :type, :string
    field :description, :string
    field :files, :array, of: :string
end
