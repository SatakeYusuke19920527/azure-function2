import { AzureFunction, Context } from '@azure/functions';

const eventGridTrigger: AzureFunction = async function (
  context: Context,
  eventGridEvent: any
): Promise<void> {
  context.log('Event received:', eventGridEvent);

  // イベントの処理ロジックをここに追加します

  context.res = {
    status: 200,
    body: 'Event received',
  };
};

export default eventGridTrigger;
