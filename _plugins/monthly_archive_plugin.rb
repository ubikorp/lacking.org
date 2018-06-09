require 'byebug'
# Jekyll Module to create monthly archive pages
#
# Shigeya Suzuki, November 2013
# Copyright notice (MIT License) attached at the end of this file
#

#
# This code is based on the following works:
#   https://gist.github.com/ilkka/707909
#   https://gist.github.com/ilkka/707020
#   https://gist.github.com/nlindley/6409459
#

#
# Archive will be written as #{archive_path}/#{year}/#{month}/index.html
# archive_path can be configured in 'path' key in 'monthly_archive' of
# site configuration file. 'path' is default null.
#

module Jekyll

  module MonthlyArchiveUtil
    def self.archive_base(site)
      site.config['monthly_archive'] && site.config['monthly_archive']['path'] || ''
    end

    def self.group_by_month(site)
      site.posts.docs.each.group_by { |post| Date.new(post.date.year, post.date.month) }
    end
  end

  # Generator class invoked from Jekyll
  class MonthlyArchiveGenerator < Generator
    def generate(site)
      # Get the basics together
      posts_grouped_by_month = MonthlyArchiveUtil.group_by_month(site)
      archive_base = MonthlyArchiveUtil.archive_base(site)
      # Process groups
      archives = posts_grouped_by_month.collect do |date, posts_for_month|
        MonthlyArchivePage.new(site, archive_base, date, posts_for_month)
      end
      # Add monthly archive pages
      site.pages.concat archives
      # Add complete archive page
      site.pages << CompleteArchivePage.new(site, archive_base, archives)
    end
  end

  # Actual page instances
  class MonthlyArchivePage < Page

    ATTRIBUTES_FOR_LIQUID = %w[
      year,
      month,
      date,
      content
    ]

    def initialize(site, dir, date, posts)
      @site = site
      @dir = dir
      @date = date
      @year = date.year
      @month = date.month
      @archive_dir_name = '%04d/%02d' % [@year, @month]
      @layout =  site.config['monthly_archive'] && site.config['monthly_archive']['layout'] || 'monthly_archive'
      self.ext = '.html'
      self.basename = 'index'
      # self.content = '{% include components/monthly_archive.html %}'
      self.content = '{% assign post_count = page.posts | size %}{% if post_count == 1 %}One Post{% else %}{{ post_count }} Posts{% endif %}'
      self.data = {
          'layout' => @layout,
          'type' => 'archive',
          'title' => "Monthly archive for #{date.strftime('%B %Y')}",
          'posts' => posts,
          'url' => File.join('/',
                     MonthlyArchiveUtil.archive_base(site),
                     @archive_dir_name, 'index.html')
      }
    end

    def render(layouts, site_payload)
      payload = {
        'page' => self.to_liquid,
        'paginator' => pager.to_liquid
      }.merge(site_payload)
      do_layout(payload, layouts)
    end

    def to_liquid(attr = nil)
      self.data.merge({
        'content' => self.content,
        'date' => @date,
        'month' => @month,
        'year' => @year
      })
    end

    def destination(dest)
      File.join('/', dest, @dir, @archive_dir_name, 'index.html')
    end
  end

  class CompleteArchivePage < Page

    ATTRIBUTES_FOR_LIQUID = %w[
      year,
      month,
      date,
      content
    ]

    def initialize(site, dir, months)
      @site = site
      @dir = dir
      @layout =  site.config['monthly_archive'] && site.config['monthly_archive']['layout'] || 'monthly_archive'
      self.ext = '.html'
      self.basename = 'index'
      self.content = '{% include components/complete_archive.html %}'
      self.data = {
          'layout' => @layout,
          'type' => 'archive',
          'title' => "Archives",
          'archive_pages' => months,
          'url' => File.join('/',
                     MonthlyArchiveUtil.archive_base(site),
                     'index.html')
      }
    end

    def render(layouts, site_payload)
      payload = {
        'page' => self.to_liquid,
        'paginator' => pager.to_liquid
      }.merge(site_payload)
      do_layout(payload, layouts)
    end

    def to_liquid(attr = nil)
      self.data.merge({
        'content' => self.content
      })
    end

    def destination(dest)
      File.join('/', dest, @dir, 'index.html')
    end
  end
end

# The MIT License (MIT)
#
# Copyright (c) 2013 Shigeya Suzuki
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
