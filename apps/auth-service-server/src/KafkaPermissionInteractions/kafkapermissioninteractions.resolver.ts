import * as graphql from "@nestjs/graphql";
import { UserAuthRequestDto } from "../kafkaInteractions/UserAuthRequestDto";
import { KafkaPermissionInteractionsService } from "./kafkapermissioninteractions.service";

export class KafkaPermissionInteractionsResolver {
  constructor(protected readonly service: KafkaPermissionInteractionsService) {}

  @graphql.Mutation(() => String)
  async PublishPermissionRequest(
    @graphql.Args()
    args: UserAuthRequestDto
  ): Promise<string> {
    return this.service.PublishPermissionRequest(args);
  }

  @graphql.Query(() => String)
  async SubscribePermissionResponse(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SubscribePermissionResponse(args);
  }
}
