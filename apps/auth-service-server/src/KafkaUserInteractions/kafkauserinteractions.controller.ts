import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { KafkaUserInteractionsService } from "./kafkauserinteractions.service";

@swagger.ApiTags("kafkaUserInteractions")
@common.Controller("kafkaUserInteractions")
export class KafkaUserInteractionsController {
  constructor(protected readonly service: KafkaUserInteractionsService) {}

  @common.Post("/publish-user-request")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PublishUserRequest(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.PublishUserRequest(body);
      }

  @common.Get("/subscribe-user-response")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubscribeUserResponse(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SubscribeUserResponse(body);
      }
}
