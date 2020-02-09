import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

// Apollo
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { GraphqlService } from './graphql.service';
import { BaseService } from '../graphql/baseService';


@NgModule({
  exports: [HttpClientModule, ApolloModule, HttpLinkModule],
  providers:[BaseService,GraphqlService]
})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {

    this.apolloClient(apollo, httpLink);
  }

  private apolloClient(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: "http://localhost:3000/graphql" }),
      cache: new InMemoryCache()
    });
  }
  // todo : don't remove method not used, since it sample for calling service
  private serviceInit() {
    // let service = new Service();
    // let graphqlService = new GraphqlService(service);
    // console.log(graphqlService.get());
  }
}


