import * as graphql from "@nestjs/graphql";
import { UserAuthRequestDto } from "../kafkaInteractions/UserAuthRequestDto";
import { KafkaRoleInteractionsService } from "./kafkaroleinteractions.service";

export class KafkaRoleInteractionsResolver {
  constructor(protected readonly service: KafkaRoleInteractionsService) {}

  @graphql.Mutation(() => String)
  async PublishRoleRequest(
    @graphql.Args()
    args: UserAuthRequestDto
  ): Promise<string> {
    return this.service.PublishRoleRequest(args);
  }

  @graphql.Query(() => String)
  async SubscribeRoleResponse(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SubscribeRoleResponse(args);
  }
}
