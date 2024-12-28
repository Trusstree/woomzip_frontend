export const postDiscordWebhook = async (inquiry:any) => {
  const asdf = await fetch(
    'https://discord.com/api/webhooks/1304084233052225547/iFurL29amzLukt-Un6HC0fdE2TiwVJLw0UL5_TjYTdai19ttCSwHr-JvtvEnlyZkqNee',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: null,
        embeds: [
          {
            title: `문의가 들어왔어요!${inquiry["houseId"]?inquiry["houseId"]:""}`,
            description: `https://www.woomzip.com/admin\n\n이름: ${inquiry["name"]}\n연락처: ${inquiry["contact"]}\n\n문의내용\n${inquiry["inquiry"]}`,
            color: 2899928,
          },
        ],
        attachments: [],
      }),
    },
  );
  console.log(asdf);
};
