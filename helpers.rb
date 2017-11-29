def active?(link_name)
  current_page.data.active == link_name.to_s ? 'active' : ''
end
