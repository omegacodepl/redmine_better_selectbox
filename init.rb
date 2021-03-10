require 'redmine'
require 'searchable_selectbox/hook_listener'

Redmine::Plugin.register :redmine_better_selectbox do
  name 'Redmine Better Selectbox'
  description "This plugin changes Redmine's selectbox searchable."
  version '0.1.4'
  author 'Tomasz Gietek for Omega Code Sp. z o.o. forked from the original author: farend'
  author_url 'https://github.com/omegacodepl/redmine_better_selectbox'
end
