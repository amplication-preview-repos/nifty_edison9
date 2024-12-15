import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { KafkaRoleInteractionsService } from "./kafkaroleinteractions.service";

@swagger.ApiTags("kafkaRoleInteractions")
@common.Controller("kafkaRoleInteractions")
export class KafkaRoleInteractionsController {
  constructor(protected readonly service: KafkaRoleInteractionsService) {}

  @common.Post("/publish-role-request")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PublishRoleRequest(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.PublishRoleRequest(body);
      }

  @common.Get("/subscribe-role-response")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubscribeRoleResponse(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SubscribeRoleResponse(body);
      }
}
