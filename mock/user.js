export default [
    {
      url: '/api/getUser',
      method: 'get',
      response: () => {
        // console.log('body>>>>>>>>', body);
        return {
          code: 0,
          message: 'ok',
          data: ["cenke", "wangcenke"],
        };
      },
    },
  ];