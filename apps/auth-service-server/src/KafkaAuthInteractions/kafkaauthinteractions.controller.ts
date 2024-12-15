import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { KafkaAuthInteractionsService } from "./kafkaauthinteractions.service";

@swagger.ApiTags("kafkaAuthInteractions")
@common.Controller("kafkaAuthInteractions")
export class KafkaAuthInteractionsController {
  constructor(protected readonly service: KafkaAuthInteractionsService) {}

  @common.Post("/publish-auth-request")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PublishAuthRequest(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.PublishAuthRequest(body);
      }

  @common.Get("/subscribe-auth-response")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubscribeAuthResponse(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SubscribeAuthResponse(body);
      }
}
