import { Module } from "@nestjs/common";
import { KafkaInteractionsService } from "./kafkainteractions.service";
import { KafkaInteractionsController } from "./kafkainteractions.controller";
import { KafkaInteractionsResolver } from "./kafkainteractions.resolver";

@Module({
  controllers: [KafkaInteractionsController],
  providers: [KafkaInteractionsService, KafkaInteractionsResolver],
  exports: [KafkaInteractionsService],
})
export class KafkaInteractionsModule {}
