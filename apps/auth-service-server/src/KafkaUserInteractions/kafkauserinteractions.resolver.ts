import * as graphql from "@nestjs/graphql";
import { UserAuthRequestDto } from "../kafkaInteractions/UserAuthRequestDto";
import { KafkaUserInteractionsService } from "./kafkauserinteractions.service";

export class KafkaUserInteractionsResolver {
  constructor(protected readonly service: KafkaUserInteractionsService) {}

  @graphql.Mutation(() => String)
  async PublishUserRequest(
    @graphql.Args()
    args: UserAuthRequestDto
  ): Promise<string> {
    return this.service.PublishUserRequest(args);
  }

  @graphql.Query(() => String)
  async SubscribeUserResponse(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SubscribeUserResponse(args);
  }
}
