module SearchableSelectbox
  class HookListener < Redmine::Hook::ViewListener
    def view_layouts_base_html_head(context)
      stylesheet_link_tag("select2.min", :plugin => "redmine_better_selectbox") +
      stylesheet_link_tag("redmine_better_selectbox", :plugin => "redmine_better_selectbox") +
      javascript_include_tag("select2.full.min.js", :plugin => "redmine_better_selectbox") +
      javascript_include_tag("redmine_better_selectbox.js", :plugin => "redmine_better_selectbox")
    end
  end
end
