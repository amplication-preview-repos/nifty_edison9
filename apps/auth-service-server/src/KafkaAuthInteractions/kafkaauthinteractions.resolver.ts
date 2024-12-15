import * as graphql from "@nestjs/graphql";
import { UserAuthRequestDto } from "../kafkaInteractions/UserAuthRequestDto";
import { KafkaAuthInteractionsService } from "./kafkaauthinteractions.service";

export class KafkaAuthInteractionsResolver {
  constructor(protected readonly service: KafkaAuthInteractionsService) {}

  @graphql.Mutation(() => String)
  async PublishAuthRequest(
    @graphql.Args()
    args: UserAuthRequestDto
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
