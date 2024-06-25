import { Module } from "@nestjs/common";
import { KafkaAuthInteractionsService } from "./kafkaauthinteractions.service";
import { KafkaAuthInteractionsController } from "./kafkaauthinteractions.controller";
import { KafkaAuthInteractionsResolver } from "./kafkaauthinteractions.resolver";

@Module({
  controllers: [KafkaAuthInteractionsController],
  providers: [KafkaAuthInteractionsService, KafkaAuthInteractionsResolver],
  exports: [KafkaAuthInteractionsService],
})
export class KafkaAuthInteractionsModule {}
