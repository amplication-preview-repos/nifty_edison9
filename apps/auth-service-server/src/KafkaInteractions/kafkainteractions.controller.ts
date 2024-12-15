import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { KafkaInteractionsService } from "./kafkainteractions.service";

@swagger.ApiTags("kafkaInteractions")
@common.Controller("kafkaInteractions")
export class KafkaInteractionsController {
  constructor(protected readonly service: KafkaInteractionsService) {}

  @common.Post("/create-auth-request")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateAuthRequest(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateAuthRequest(body);
      }

  @common.Get("/:id/publish-auth-request")
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
