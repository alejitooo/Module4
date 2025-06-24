describe('Tracking Reducer', () => {
  it('debe incrementar contador de tag', () => {
    const result = trackingReducer({}, trackClick({ tag: 'btnTest' }));
    expect(result).toEqual({ btnTest: 1 });
  });
});
