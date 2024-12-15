import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { KafkaPermissionInteractionsService } from "./kafkapermissioninteractions.service";

@swagger.ApiTags("kafkaPermissionInteractions")
@common.Controller("kafkaPermissionInteractions")
export class KafkaPermissionInteractionsController {
  constructor(protected readonly service: KafkaPermissionInteractionsService) {}

  @common.Post("/publish-permission-request")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PublishPermissionRequest(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.PublishPermissionRequest(body);
      }

  @common.Get("/subscribe-permission-response")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubscribePermissionResponse(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SubscribePermissionResponse(body);
      }
}
