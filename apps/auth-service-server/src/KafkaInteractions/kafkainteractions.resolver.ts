import * as graphql from "@nestjs/graphql";
import { UserAuthRequestDto } from "../kafkaInteractions/UserAuthRequestDto";
import { KafkaInteractionsService } from "./kafkainteractions.service";

export class KafkaInteractionsResolver {
  constructor(protected readonly service: KafkaInteractionsService) {}

  @graphql.Mutation(() => String)
  async CreateAuthRequest(
    @graphql.Args()
    args: UserAuthRequestDto
  ): Promise<string> {
    return this.service.CreateAuthRequest(args);
  }

  @graphql.Query(() => String)
  async PublishAuthRequest(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.PublishAuthRequest(args);
  }

  @graphql.Query(() => String)
  async SubscribeAuthResponse(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SubscribeAuthResponse(args);
  }
}
