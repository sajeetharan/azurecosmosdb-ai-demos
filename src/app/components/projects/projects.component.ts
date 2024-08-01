import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  cardData = [
    {
      "imageUrl": "assets/images/azure-cosmosdb-copilot.png",
      "title": "Build a Copilot sample app - Azure Cosmos DB for NoSQL",
      "likes": "12",
      "comments": "7",
      "description": "This sample application shows how to build a Generative-AI application using Azure Cosmos DB for NoSQL using its new vector search capabilities and Azure OpenAI Service and Semantic Kernel.",
      "gitLink": "https://github.com/AzureCosmosDB/cosmosdb-nosql-copilot",
      "browserLink": "https://github.com/AzureCosmosDB/cosmosdb-nosql-copilot"
    },
    {
      "imageUrl": "assets/images/cosmosdb-mongo-copilot.png",
      "title": "Build a Copilot sample app - Azure Cosmos DB for MongoDB",
      "likes": "125",
      "comments": "5",
      "description": "Built for Techamica, a startup software company. Emphasized simplicity and user-friendliness to reflect their commitment to accessible solutions.",
      "gitLink": "https://github.com/AzureCosmosDB/cosmosdb-mongo-copilot",
      "browserLink": "https://github.com/AzureCosmosDB/cosmosdb-mongo-copilot"
    },
    {
      "imageUrl": "assets/images/solution-accelerator.png",
      "title": "Build your own Copilot End to End Solution Accelerator",
      "likes": "15",
      "comments": "31",
      "description": "Production Ready Reference Solution for how to build your own copilot using Azure services including: Azure Cosmos DB for NoSQL, Azure OpenAI Service, Azure Kubernetes Service or Azure Container Apps.",
      "gitLink": "https://github.com/Azure/buildyourowncopilot",
      "browserLink": "https://github.com/Azure/buildyourowncopilot"
    },
    {
      "imageUrl": "assets/images/solution-accelerator.png",
      "title": "Movie ChatBot for Azure Cosmos DB for NoSQL and Azure Cosmos DB for MongoDB",
      "likes": "124",
      "comments": "1",
      "description": "In this sample, we'll demonstrate how to build a RAG (Retrieval Augmented Generation) pattern application using a subset of the popular Movie Lens 1M dataset. This sample performs RAG over movie data with vector search, stores conversational chat history, and leverages a semantic cache, all using Azure Cosmos DB and its built-in vector search capability. Azure OpenAI Service is used to generate embeddings and LLM completions.",
      "gitLink": "https://github.com/AzureCosmosDB/Fabric-Conf-2024-Build-AI-Apps",
      "browserLink": "https://github.com/AzureCosmosDB/Fabric-Conf-2024-Build-AI-Apps"
    },
    {
      "imageUrl": "assets/images/cosmic-rag-food.png",
      "title": "Cosmic RAG Food app with Langchain, Azure OpenAI and Azure Cosmos DB for MongoDB (vCore)",
      "likes": "34",
      "comments": "23",
      "description": "A Demo application for a streamlined ordering system tailored for various food categories. It allows users to request customized meals, such as high protein dishes, with recommendations provided from our database. Users can further customize their choices before sending their orders from the app to the restaurant, including delivery details.",
      "gitLink": "https://github.com/Azure-Samples/Cosmic-Food-RAG-app",
      "browserLink": "https://github.com/Azure-Samples/Cosmic-Food-RAG-app"
    },
  ];
}
