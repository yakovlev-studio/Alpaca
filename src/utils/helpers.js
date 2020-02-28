const providerNames = {
  'google.com': 'Google',
  'facebook.com': 'Facebook',
};

const providerTitles = {
  SIGN_IN: 'Sign in with',
  LINK: 'Link',
  UNLINK: 'Unlink',
};

/**
 * Return array of user auth providers
 */
export function getProviders(user) {
  if (user) {
    return user.providerData.map(provider => provider.providerId);
  }

  return [];
}

export function getProviderButtonTitle(user, providerID) {
  const providers = getProviders(user);
  const isProvider = providers.includes(providerID);
  const isOnlyProvider = providers.length === 1 && isProvider;
  let variant = 'SIGN_IN';

  if (user) {
    variant = isProvider ? 'UNLINK' : 'LINK';
  }

  return {
    variant,
    title: `${providerTitles[variant]} ${providerNames[providerID]}`,
    isOnlyProvider,
  };
}
